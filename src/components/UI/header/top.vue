<template>
  <div>
    <div class="fixed top-0 z-[99999] w-full border-b border-slate-200/70 bg-white/80 py-3 backdrop-blur transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/80">
      <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div class="relative ms-2 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-slate-100 text-slate-500 dark:bg-slate-900 dark:text-slate-400">
          <svg class="h-12 w-12 -translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
          </svg>
        </div>

        <a href="https://flowbite.com/" class="flex items-center gap-3 rtl:space-x-reverse">
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-slate-900 dark:text-slate-100">
            رِبـاط
            <v-badge
              color="warning"
              content="تجريبي"
              text-color="white"
              inline
            >
            </v-badge>
          </span>
        </a>

        <div class="flex items-center gap-2">
          <button
            class="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-emerald-500"
            type="button"
            @click="emit('toggle-theme')"
          >
            {{ theme === 'dark' ? 'Light Mode' : 'Dark Mode' }}
          </button>
          <button
            class="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-emerald-500"
            type="button"
            @click="emit('toggle-language')"
          >
            {{ language === 'ar' ? 'EN' : 'AR' }}
          </button>
          <button class="inline-flex rounded-full border border-slate-200 bg-white px-4 py-3 text-lg text-slate-700 transition hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300" type="button">
            <svg class="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  theme: 'light' | 'dark';
  language: 'ar' | 'en';
}>();

const emit = defineEmits<{
  (event: 'toggle-theme'): void;
  (event: 'toggle-language'): void;
}>();
</script>
