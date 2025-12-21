<template>
  <div class="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
    <UIHeaderTop />
    <main class="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <slot />
    </main>
    <UIHeaderBottom />
  </div>
</template>
<script setup lang="ts">
import UIHeaderTop from '@/components/UI/header/top.vue';
import UIHeaderBottom from '@/components/UI/header/bottom.vue';
</script>
