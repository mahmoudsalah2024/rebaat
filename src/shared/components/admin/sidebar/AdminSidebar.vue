<template>
  <div>
    <!-- Mobile overlay -->
    <div v-if="isOpen && isMobile" @click="emit('toggle')"
      class="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm transition-opacity lg:hidden"></div>

    <!-- Sidebar -->
    <aside
      :class="[
        'fixed top-0 z-50 h-screen border-slate-200/70 bg-slate-50/95 backdrop-blur transition-all duration-300 dark:border-slate-800 dark:bg-slate-950/95',
        isOpen ? 'w-64' : 'w-16',
        isRTL ? 'border-l' : 'border-r',
        isMobile && !isOpen ? (isRTL ? 'translate-x-full' : '-translate-x-full') : 'translate-x-0'
      ]"
      :style="{ [isRTL ? 'right' : 'left']: 0 }">

      <!-- Toggle button -->
      <button @click="emit('toggle')"
        class="absolute top-4 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 transition hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300 dark:hover:border-emerald-500"
        :class="isRTL ? '-left-5' : '-right-5'">
        <svg class="h-5 w-5" :class="{ 'rotate-180': isOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            :d="isRTL ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'" />
        </svg>
      </button>

      <!-- Brand -->
      <div class="flex py-6 items-center justify-center  border-b border-slate-200/70 dark:border-slate-800">
        <span v-if="isOpen" class="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {{ $t('layout.header.brandName') }}
        </span>
        <span v-else class="text-lg font-semibold text-emerald-600 dark:text-emerald-500">
          {{ $t('layout.header.brandName').charAt(0) }}
        </span>
      </div>

      <!-- Navigation -->
      <nav class="mt-6 space-y-1 px-2">
        <router-link v-for="item in menuItems" :key="item.path" :to="item.path"
          :class="[
            'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
            isActive(item.path)
              ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400'
              : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900'
          ]">
          <component :is="item.icon" class="h-5 w-5 flex-shrink-0" />
          <span v-if="isOpen" class="truncate">{{ item.label }}</span>
        </router-link>
      </nav>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { computed, h } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

const {isOpen, isRTL, isMobile} = defineProps<{
  isOpen: boolean;
  isRTL: boolean;
  isMobile: boolean;
}>();

const emit = defineEmits<{
  (event: 'toggle'): void;
}>();

const route = useRoute();
const { t } = useI18n();

const menuItems = computed(() => [
  {
    path: '/complaints/list',
    label: t('admin.sidebar.complaints'),
    icon: () => h('svg', { class: 'h-5 w-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
      })
    ])
  }
]);

const isActive = (path: string) => {
  return route.path.startsWith(path);
};
</script>
