<template>
  <div
    class="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100"
    :class="[{ dark: isDark }, isRTL ? 'text-right' : 'text-left']"
    :dir="isRTL ? 'rtl' : 'ltr'"
    :lang="language"
  >
    <UIHeaderTop
      :language="language"
      :theme="theme"
      @toggle-language="toggleLanguage"
      @toggle-theme="toggleTheme"
    />
    <main class="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <slot />
    </main>
    <UIHeaderBottom 
          :language="language"
      :theme="theme"
    />
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, provide, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import UIHeaderTop from '@/components/UI/header/top.vue';
import UIHeaderBottom from '@/components/UI/header/bottom.vue';

const theme = ref<'light' | 'dark'>('light');
const language = ref<'ar' | 'en'>('ar');
const { locale } = useI18n({ useScope: 'global' });

const isDark = computed(() => theme.value === 'dark');
const isRTL = computed(() => language.value === 'ar');

const toggleTheme = () => {
  theme.value = isDark.value ? 'light' : 'dark';
};

const toggleLanguage = () => {
  language.value = isRTL.value ? 'en' : 'ar';
};

provide('theme', theme);
provide('language', language);
provide('isDark', isDark);
provide('isRTL', isRTL);

watch(theme, (value) => {
  localStorage.setItem('theme', value);
});

watch(
  language,
  (value) => {
    localStorage.setItem('language', value);
    locale.value = value;
    document.documentElement.setAttribute('dir', value === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', value);
  },
  { immediate: true }
);

onMounted(() => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'dark' || storedTheme === 'light') {
    theme.value = storedTheme;
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme.value = 'dark';
  } else {
    theme.value = 'light';
  }

  const storedLanguage = localStorage.getItem('language');
  if (storedLanguage === 'ar' || storedLanguage === 'en') {
    language.value = storedLanguage;
  } else if (navigator.language && navigator.language.toLowerCase().startsWith('ar')) {
    language.value = 'ar';
  } else {
    language.value = 'en';
  }
});
</script>
