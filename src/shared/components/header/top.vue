<template>
    <div>
        <div class="fixed top-0 z-99999 w-full border-b border-slate-200/70 bg-slate-50/95 py-3 backdrop-blur transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/95"
            :lang="language">
            <div class="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div class="flex items-center gap-2">
                    <div class="relative h-10 w-10 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-900">
                        <svg class="absolute -left-1 h-12 w-12 text-slate-400 dark:text-slate-500" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <button
                        class="inline-flex rounded-full border border-slate-200 px-3 py-3 text-slate-700 transition hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-emerald-500">
                        <svg class="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z" />
                        </svg>
                    </button>
                </div>

                <RouterLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <span class="whitespace-nowrap text-lg font-semibold text-slate-900 dark:text-slate-100">
                        {{ $t('layout.header.brandName') }}
                    </span>
                </RouterLink>

                <!-- Toggle UI -->
                <div class="flex items-center gap-2">
                    <button
                        class="inline-flex rounded-full border border-slate-200 px-3 py-3 text-slate-700 transition hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-emerald-500"
                        type="button" @click="emit('toggle-theme')"
                        :aria-label="theme === 'dark' ? $t('common.theme.lightMode') : $t('common.theme.darkMode')"
                        :title="theme === 'dark' ? $t('common.theme.lightMode') : $t('common.theme.darkMode')">
                        <svg v-if="theme === 'dark'" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    </button>
                    <button
                        class="inline-flex rounded-full border border-slate-200 px-3 py-3 text-slate-700 transition hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-emerald-500"
                        type="button" @click="emit('toggle-language')"
                        :aria-label="language === 'ar' ? $t('common.language.enShort') : $t('common.language.arShort')"
                        :title="language === 'ar' ? $t('common.language.enShort') : $t('common.language.arShort')">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
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
