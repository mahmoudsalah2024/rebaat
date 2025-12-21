<template>
  <div
    class="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100"
    :class="[{ dark: isDark }, isRTL ? 'text-right' : 'text-left']"
    :dir="isRTL ? 'rtl' : 'ltr'"
    :lang="language"
  >
    <!-- Hero Section -->
    <header class="relative overflow-hidden">
      <div class="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-100/70 via-slate-50 to-slate-50 dark:from-emerald-950/40 dark:via-slate-950 dark:to-slate-950"></div>
      <div class="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pt-20">
        <nav class="flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-2xl font-bold text-white shadow-lg shadow-emerald-500/30">
              {{ content.brand.logo }}
            </div>
            <div>
              <p class="text-lg font-semibold">{{ content.brand.name }}</p>
              <p class="text-xs text-slate-600 dark:text-slate-400">{{ content.brand.tagline }}</p>
            </div>
          </div>
          <div class="flex flex-wrap items-center gap-3 text-sm">
            <a class="rounded-full border border-slate-200 px-4 py-2 text-slate-700 transition hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-emerald-500" href="#features-management">{{ content.nav.features }}</a>
            <a class="rounded-full border border-slate-200 px-4 py-2 text-slate-700 transition hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-emerald-500" href="#security">{{ content.nav.security }}</a>
            <a class="rounded-full border border-slate-200 px-4 py-2 text-slate-700 transition hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-emerald-500" href="#cta">{{ content.nav.contact }}</a>
          </div>
          <!-- Toggle UI -->
          <div class="flex items-center gap-2">
            <button
              class="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-emerald-500"
              type="button"
              @click="toggleTheme"
            >
              {{ isDark ? content.toggles.light : content.toggles.dark }}
            </button>
            <button
              class="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-emerald-500"
              type="button"
              @click="toggleLanguage"
            >
              {{ isRTL ? 'EN' : 'AR' }}
            </button>
          </div>
        </nav>

        <div class="mt-12 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p class="inline-flex items-center rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">
              {{ content.hero.badge }}
            </p>
            <h1 class="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
              {{ content.hero.title }}
              <span class="block text-emerald-600 dark:text-emerald-400">{{ content.hero.subtitle }}</span>
            </h1>
            <p class="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              {{ content.hero.description }}
            </p>
            <div class="mt-8 flex flex-wrap gap-4">
              <button class="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-700">
                {{ content.hero.primaryCta }}
              </button>
              <button class="rounded-full border border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-400 dark:border-emerald-500/30 dark:text-emerald-200">
                {{ content.hero.secondaryCta }}
              </button>
            </div>
            <div class="mt-10 grid gap-4 sm:grid-cols-3">
              <div class="rounded-2xl bg-white/80 p-4 shadow-sm backdrop-blur dark:bg-slate-900/60">
                <p class="text-2xl font-bold text-emerald-600">{{ content.hero.stats[0].value }}</p>
                <p class="text-sm text-slate-600 dark:text-slate-400">{{ content.hero.stats[0].label }}</p>
              </div>
              <div class="rounded-2xl bg-white/80 p-4 shadow-sm backdrop-blur dark:bg-slate-900/60">
                <p class="text-2xl font-bold text-emerald-600">{{ content.hero.stats[1].value }}</p>
                <p class="text-sm text-slate-600 dark:text-slate-400">{{ content.hero.stats[1].label }}</p>
              </div>
              <div class="rounded-2xl bg-white/80 p-4 shadow-sm backdrop-blur dark:bg-slate-900/60">
                <p class="text-2xl font-bold text-emerald-600">{{ content.hero.stats[2].value }}</p>
                <p class="text-sm text-slate-600 dark:text-slate-400">{{ content.hero.stats[2].label }}</p>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="absolute -right-10 top-10 hidden h-56 w-56 rounded-full bg-emerald-200/60 blur-3xl dark:bg-emerald-700/30 lg:block"></div>
            <div class="relative rounded-3xl border border-white/60 bg-white/80 p-6 shadow-2xl shadow-emerald-500/10 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
              <div class="space-y-4">
                <div class="flex items-center justify-between rounded-2xl bg-slate-50 p-4 dark:bg-slate-950">
                  <div>
                    <p class="text-sm text-slate-500 dark:text-slate-400">{{ content.hero.monthlyCard.label }}</p>
                    <p class="text-xl font-semibold">{{ content.hero.monthlyCard.value }}</p>
                  </div>
                  <span class="rounded-full bg-emerald-100 px-3 py-1 text-xs text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">{{ content.hero.monthlyCard.badge }}</span>
                </div>
                <div class="rounded-2xl border border-slate-200/60 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                  <p class="text-sm font-semibold">{{ content.hero.alert.title }}</p>
                  <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">{{ content.hero.alert.description }}</p>
                  <div class="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span>{{ content.hero.alert.time }}</span>
                    <span class="rounded-full bg-emerald-100 px-3 py-1 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">{{ content.hero.alert.status }}</span>
                  </div>
                </div>
                <div class="grid gap-4 sm:grid-cols-2">
                  <div class="rounded-2xl border border-slate-200/60 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                    <p class="text-sm text-slate-500 dark:text-slate-400">{{ content.hero.vote.label }}</p>
                    <p class="mt-2 text-lg font-semibold">{{ content.hero.vote.title }}</p>
                    <p class="text-xs text-emerald-600 dark:text-emerald-300">{{ content.hero.vote.status }}</p>
                  </div>
                  <div class="rounded-2xl border border-slate-200/60 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                    <p class="text-sm text-slate-500 dark:text-slate-400">{{ content.hero.occupancy.label }}</p>
                    <p class="mt-2 text-lg font-semibold">{{ content.hero.occupancy.value }}</p>
                    <p class="text-xs text-slate-500 dark:text-slate-400">{{ content.hero.occupancy.status }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <!-- Why Rabaat Section -->
      <section class="bg-white py-16 dark:bg-slate-900" id="why-Rabaat">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <p class="text-sm font-semibold text-emerald-600 dark:text-emerald-300">{{ content.why.label }}</p>
            <h2 class="mt-3 text-3xl font-bold">{{ content.why.title }}</h2>
            <p class="mt-4 text-base text-slate-600 dark:text-slate-300">
              {{ content.why.description }}
            </p>
          </div>
          <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div v-for="item in content.why.cards" :key="item.title" class="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-950">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-2xl text-white shadow-lg shadow-emerald-500/30">
                {{ item.icon }}
              </div>
              <h3 class="mt-5 text-lg font-semibold">{{ item.title }}</h3>
              <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Features for Property Management Section -->
      <section class="py-16" id="features-management">
        <div class="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p class="text-sm font-semibold text-emerald-600 dark:text-emerald-300">{{ content.management.label }}</p>
            <h2 class="mt-3 text-3xl font-bold">{{ content.management.title }}</h2>
            <p class="mt-4 text-base text-slate-600 dark:text-slate-300">
              {{ content.management.description }}
            </p>
            <ul class="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li v-for="feature in content.management.features" :key="feature" class="flex items-center gap-3">
                <span class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-200">✓</span>
                {{ feature }}
              </li>
            </ul>
          </div>
          <div class="grid gap-4 sm:grid-cols-2">
            <div v-for="card in content.management.cards" :key="card.title" class="rounded-3xl border border-slate-200/70 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 class="text-lg font-semibold">{{ card.title }}</h3>
              <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">{{ card.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Features for Residents Section -->
      <section class="bg-white py-16 dark:bg-slate-900" id="features-residents">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div class="grid gap-10 lg:grid-cols-2">
            <div class="rounded-3xl bg-emerald-50 p-8 shadow-sm dark:bg-emerald-900/20">
              <h2 class="text-3xl font-bold">{{ content.residents.title }}</h2>
              <p class="mt-4 text-base text-slate-600 dark:text-slate-300">
                {{ content.residents.description }}
              </p>
              <div class="mt-6 grid gap-3 sm:grid-cols-2">
                <div v-for="feature in content.residents.features" :key="feature" class="flex items-center gap-3 rounded-2xl bg-white/90 p-4 text-sm text-slate-600 shadow-sm dark:bg-slate-950">
                  <span class="text-emerald-600 dark:text-emerald-300">●</span>
                  {{ feature }}
                </div>
              </div>
            </div>
            <div class="grid gap-6">
              <div class="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h3 class="text-lg font-semibold">{{ content.residents.cards[0].title }}</h3>
                <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {{ content.residents.cards[0].description }}
                </p>
              </div>
              <div class="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h3 class="text-lg font-semibold">{{ content.residents.cards[1].title }}</h3>
                <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {{ content.residents.cards[1].description }}
                </p>
              </div>
              <div class="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h3 class="text-lg font-semibold">{{ content.residents.cards[2].title }}</h3>
                <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {{ content.residents.cards[2].description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Online Payments Section -->
      <section class="py-16" id="payments">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div class="grid gap-10 lg:grid-cols-2">
            <div>
              <p class="text-sm font-semibold text-emerald-600 dark:text-emerald-300">{{ content.payments.label }}</p>
              <h2 class="mt-3 text-3xl font-bold">{{ content.payments.title }}</h2>
              <p class="mt-4 text-base text-slate-600 dark:text-slate-300">
                {{ content.payments.description }}
              </p>
              <div class="mt-6 space-y-4">
                <div class="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div>
                    <p class="text-sm text-slate-500 dark:text-slate-400">{{ content.payments.cards[0].label }}</p>
                    <p class="text-lg font-semibold">{{ content.payments.cards[0].value }}</p>
                  </div>
                  <span class="rounded-full bg-emerald-100 px-3 py-1 text-xs text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">{{ content.payments.cards[0].badge }}</span>
                </div>
                <div class="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div>
                    <p class="text-sm text-slate-500 dark:text-slate-400">{{ content.payments.cards[1].label }}</p>
                    <p class="text-lg font-semibold">{{ content.payments.cards[1].value }}</p>
                  </div>
                  <span class="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300">{{ content.payments.cards[1].badge }}</span>
                </div>
                <div class="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div>
                    <p class="text-sm text-slate-500 dark:text-slate-400">{{ content.payments.cards[2].label }}</p>
                    <p class="text-lg font-semibold">{{ content.payments.cards[2].value }}</p>
                  </div>
                  <span class="rounded-full bg-emerald-100 px-3 py-1 text-xs text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">{{ content.payments.cards[2].badge }}</span>
                </div>
              </div>
            </div>
            <div class="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <h3 class="text-xl font-semibold">{{ content.payments.dashboard.title }}</h3>
              <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">{{ content.payments.dashboard.description }}</p>
              <div class="mt-6 space-y-4">
                <div v-for="metric in content.payments.metrics" :key="metric.label" class="space-y-2">
                  <div class="flex items-center justify-between text-sm">
                    <span class="text-slate-600 dark:text-slate-300">{{ metric.label }}</span>
                    <span class="font-semibold">{{ metric.value }}</span>
                  </div>
                  <div class="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                    <div class="h-full rounded-full bg-emerald-500" :style="{ width: metric.progress }"></div>
                  </div>
                </div>
              </div>
              <div class="mt-8 rounded-2xl bg-slate-50 p-4 text-xs text-slate-500 dark:bg-slate-950 dark:text-slate-400">
                {{ content.payments.dashboard.note }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Security & Privacy Section -->
      <section class="bg-white py-16 dark:bg-slate-900" id="security">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div class="grid gap-10 lg:grid-cols-2">
            <div>
              <p class="text-sm font-semibold text-emerald-600 dark:text-emerald-300">{{ content.security.label }}</p>
              <h2 class="mt-3 text-3xl font-bold">{{ content.security.title }}</h2>
              <p class="mt-4 text-base text-slate-600 dark:text-slate-300">
                {{ content.security.description }}
              </p>
              <div class="mt-6 grid gap-4 sm:grid-cols-2">
                <div v-for="item in content.security.cards" :key="item.title" class="rounded-3xl border border-slate-200/70 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <h3 class="text-lg font-semibold">{{ item.title }}</h3>
                  <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">{{ item.description }}</p>
                </div>
              </div>
            </div>
            <div class="rounded-3xl bg-emerald-600 p-8 text-white shadow-lg shadow-emerald-500/30">
              <h3 class="text-2xl font-semibold">{{ content.security.highlight.title }}</h3>
              <p class="mt-3 text-sm text-emerald-100">
                {{ content.security.highlight.description }}
              </p>
              <div class="mt-6 space-y-4 text-sm">
                <div class="flex items-center justify-between rounded-2xl bg-emerald-500/40 p-4">
                  <span>{{ content.security.highlight.items[0].label }}</span>
                  <span class="font-semibold">{{ content.security.highlight.items[0].value }}</span>
                </div>
                <div class="flex items-center justify-between rounded-2xl bg-emerald-500/40 p-4">
                  <span>{{ content.security.highlight.items[1].label }}</span>
                  <span class="font-semibold">{{ content.security.highlight.items[1].value }}</span>
                </div>
                <div class="flex items-center justify-between rounded-2xl bg-emerald-500/40 p-4">
                  <span>{{ content.security.highlight.items[2].label }}</span>
                  <span class="font-semibold">{{ content.security.highlight.items[2].value }}</span>
                </div>
              </div>
              <button class="mt-8 w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50">
                {{ content.security.highlight.cta }}
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Target Audience Section -->
      <section class="py-16" id="audience">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <p class="text-sm font-semibold text-emerald-600 dark:text-emerald-300">{{ content.audience.label }}</p>
            <h2 class="mt-3 text-3xl font-bold">{{ content.audience.title }}</h2>
          </div>
          <div class="mt-10 grid gap-6 md:grid-cols-3">
            <div v-for="audience in content.audience.cards" :key="audience.title" class="rounded-3xl border border-slate-200/70 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-xl text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-200">
                {{ audience.icon }}
              </div>
              <h3 class="mt-4 text-lg font-semibold">{{ audience.title }}</h3>
              <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">{{ audience.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Call To Action Section -->
      <section class="bg-emerald-600 py-16 text-white" id="cta">
        <div class="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold">{{ content.cta.title }}</h2>
          <p class="mt-4 text-base text-emerald-100">
            {{ content.cta.description }}
          </p>
          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <button class="rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50">
              {{ content.cta.primaryCta }}
            </button>
            <button class="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              {{ content.cta.secondaryCta }}
            </button>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-slate-900 py-10 text-slate-300">
      <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div>
          <p class="text-lg font-semibold text-white">{{ content.brand.name }}</p>
          <p class="mt-1 text-xs text-slate-400">{{ content.brand.tagline }}</p>
        </div>
        <div class="flex flex-wrap items-center gap-4 text-sm">
          <a class="transition hover:text-white" href="#why-Rabaat">{{ content.footer.links.why }}</a>
          <a class="transition hover:text-white" href="#features-management">{{ content.footer.links.management }}</a>
          <a class="transition hover:text-white" href="#features-residents">{{ content.footer.links.residents }}</a>
          <a class="transition hover:text-white" href="#security">{{ content.footer.links.security }}</a>
        </div>
        <p class="text-xs text-slate-500">{{ content.footer.copyright }}</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';

// Theme logic
const theme = ref('light');
const isDark = computed(() => theme.value === 'dark');

const setTheme = (value: any) => {
  theme.value = value;
};

const toggleTheme = () => {
  setTheme(isDark.value ? 'light' : 'dark');
};

// Language logic
const language:any = ref('ar');
const isRTL = computed(() => language.value === 'ar');

const toggleLanguage = () => {
  language.value = isRTL.value ? 'en' : 'ar';
};

const messages = {
  ar: {
    brand: {
      logo: 'ر',
      name: 'ربــاط',
      tagline: 'منصة إدارة العقارات الذكية'
    },
    nav: {
      features: 'الميزات',
      security: 'الأمان',
      contact: 'تواصل معنا'
    },
    toggles: {
      light: 'وضع النهار',
      dark: 'الوضع الليلي'
    },
    hero: {
      badge: 'منصة متكاملة لإدارة المجتمعات السكنية',
      title: 'ربــاط',
      subtitle: 'يجمعنا العقار ويوحدنا القرار',
      description:
        'رباط هو نظام ذكي يربط الإدارة بالسكان، يضمن الشفافية في المصروفات، ويختصر الوقت عبر لوحات تحكم مركزية للعمليات والقرارات اليومية.',
      primaryCta: 'ابدأ الآن',
      secondaryCta: 'اطلب عرض توضيحي',
      stats: [
        { value: '+250', label: 'مجمع سكني' },
        { value: '98%', label: 'رضا السكان' },
        { value: '24/7', label: 'مراقبة وبلاغات' }
      ],
      monthlyCard: {
        label: 'مصروفات الشهر',
        value: '120,450 ج.م',
        badge: 'متابعة مباشرة'
      },
      alert: {
        title: 'تنبيه صيانة عاجل',
        description: 'تم إنشاء طلب صيانة للمصعد - برج 4',
        time: 'قبل 10 دقائق',
        status: 'قيد المعالجة'
      },
      vote: {
        label: 'قرارات مجلس الإدارة',
        title: 'تصويت جديد',
        status: 'تم فتح التصويت'
      },
      occupancy: {
        label: 'مستوى الإشغال',
        value: '92%',
        status: 'تحديث مباشر'
      }
    },
    why: {
      label: 'لماذا رباط؟',
      title: 'نظام يجعل إدارة العقار سهلة وشفافة',
      description: 'كل ما تحتاجه الإدارة والسكان في منصة واحدة تساعد على تنظيم العمليات اليومية وتوحيد القرارات.',
      cards: [
        {
          icon: '📊',
          title: 'تنظيم شامل',
          description: 'لوحات تحكم مركزية تجمع الإيرادات والمصروفات والعقود في مكان واحد.'
        },
        {
          icon: '🤝',
          title: 'شفافية كاملة',
          description: 'تتبع كل قرار ومصروف مع سجل واضح ومتاح لجميع الأطراف.'
        },
        {
          icon: '⚡',
          title: 'سهولة الاستخدام',
          description: 'واجهة بسيطة تدعم العربية وتعمل بسلاسة على جميع الأجهزة.'
        },
        {
          icon: '🔔',
          title: 'تواصل فوري',
          description: 'إعلانات وتنبيهات مباشرة تصل للإدارة والسكان في الوقت المناسب.'
        }
      ]
    },
    management: {
      label: 'الإدارة الذكية',
      title: 'لوحة إدارة شاملة لكل التفاصيل',
      description: 'أدوات متقدمة لإدارة الإعلانات، اتخاذ القرار، التكاليف، والاشتراكات مع تقارير فورية تضمن الشفافية.',
      features: [
        'إعلانات وتنبيهات فورية',
        'تصويتات وقرارات رقمية',
        'إدارة الاشتراكات والرسوم',
        'ملفات السكان والعمال',
        'تقارير مالية وتشغيلية'
      ],
      cards: [
        {
          title: 'إدارة الإعلانات',
          description: 'أنشئ الإعلانات ووزعها حسب المباني والأدوار.'
        },
        {
          title: 'الحوكمة والقرارات',
          description: 'تصويت رقمي محفوظ مع إشعار بالنتائج.'
        },
        {
          title: 'إدارة السكان',
          description: 'ملفات موحدة للسكان والزوار والعمال.'
        },
        {
          title: 'التقارير المتقدمة',
          description: 'لوحات تحليلية للمصاريف والدخل والتشغيل.'
        }
      ]
    },
    residents: {
      title: 'تجربة سلسة للسكان',
      description: 'تطبيق متكامل يمكّن السكان من متابعة كل شيء داخل مجتمعهم السكني بسهولة وأمان.',
      features: ['الشكـاوى والملاحظات', 'المدفوعات والإيصالات', 'طلبات الصيانة', 'إدارة الزوار', 'إشعارات الكاميرات (على مستوى الدور)'],
      cards: [
        {
          title: 'طلبات الصيانة والمتابعة',
          description: 'إنشاء البلاغات، متابعة الحالة، ومشاركة الصور والمستندات مع فريق التشغيل.'
        },
        {
          title: 'مدفوعات رقمية مرنة',
          description: 'دفع الرسوم أو الإيجارات مباشرة مع إشعارات فورية وتاريخ عمليات منظم.'
        },
        {
          title: 'خصوصية الكاميرات',
          description: 'مراقبة آمنة ومحدودة على مستوى الدور فقط لضمان راحة السكان.'
        }
      ]
    },
    payments: {
      label: 'مدفوعات إلكترونية',
      title: 'تحصيل الرسوم والإيجارات بسهولة',
      description: 'نظام تحصيل آمن يدعم الرسوم الشهرية والإيجارات مع سجل كامل للمدفوعات.',
      cards: [
        { label: 'رسوم شهرية', value: '600 ج.م', badge: 'تم الدفع' },
        { label: 'إيجار شهري', value: '2,200 ج.م', badge: 'قيد التحصيل' },
        { label: 'تاريخ المدفوعات', value: 'محدث تلقائياً', badge: 'أرشفة ذكية' }
      ],
      dashboard: {
        title: 'لوحة تحصيل شهرية',
        description: 'نسب التحصيل الشهرية ومؤشرات الأداء الرئيسية.',
        note: 'تحديثات لحظية مع إشعارات تلقائية للسكان والإدارة.'
      },
      metrics: [
        { label: 'نسبة التحصيل', value: '92%', progress: '92%' },
        { label: 'السداد التلقائي', value: '76%', progress: '76%' },
        { label: 'طلبات متأخرة', value: '8%', progress: '8%' }
      ]
    },
    security: {
      label: 'الأمان والخصوصية',
      title: 'حوكمة واضحة وصلاحيات دقيقة',
      description: 'حماية بياناتك أولوية، مع أدوار وصلاحيات مخصصة لكل جهة لضمان الخصوصية والامتثال.',
      cards: [
        { title: 'أدوار وصلاحيات', description: 'إدارة مرنة لصلاحيات الإدارة والسكان والموردين.' },
        { title: 'حماية البيانات', description: 'تشفير وحفظ احتياطي مستمر لضمان سلامة المعلومات.' },
        { title: 'تدقيق كامل', description: 'سجل نشاط مفصل لكل قرار ومعاملة مالية.' },
        { title: 'خصوصية الكاميرات', description: 'مراقبة ضمن الحدود مع احترام خصوصية السكان.' }
      ],
      highlight: {
        title: 'خصوصية الكاميرات أولاً',
        description: 'تحديد الوصول لمستوى الدور فقط، مع تشفير كامل ومتابعة لنشاط المشاهدة.',
        items: [
          { label: 'سجل المشاهدات', value: 'مفعل' },
          { label: 'تشفير الفيديو', value: '256-bit' },
          { label: 'تنبيهات الخصوصية', value: 'فورية' }
        ],
        cta: 'تعرف على سياسات الحماية'
      }
    },
    audience: {
      label: 'الفئات المستهدفة',
      title: 'مصمم لكل نوع من المجتمعات',
      cards: [
        { icon: '🏢', title: 'اتحادات الملاك', description: 'حلول حوكمة وشفافية لإدارة الممتلكات المشتركة.' },
        { icon: '🏬', title: 'المباني السكنية', description: 'إدارة المصروفات والصيانة بطريقة رقمية واضحة.' },
        { icon: '🏘️', title: 'المجمعات السكنية', description: 'ربط شامل للسكان والإدارة والتشغيل في منصة واحدة.' }
      ]
    },
    cta: {
      title: 'حوّل إدارة عقارك إلى تجربة ذكية اليوم',
      description: 'ابدأ مع رباط واستمتع بتواصل فوري وتقارير واضحة وتجربة سلسة للإدارة والسكان.',
      primaryCta: 'ابدأ الآن',
      secondaryCta: 'اطلب عرض توضيحي'
    },
    footer: {
      links: {
        why: 'لماذا رباط',
        management: 'الإدارة',
        residents: 'السكان',
        security: 'الأمان'
      },
      copyright: '© 2024 Rabaat. جميع الحقوق محفوظة.'
    }
  },
  en: {
    brand: {
      logo: 'R',
      name: 'Rabaat',
      tagline: 'Smart property management platform'
    },
    nav: {
      features: 'Features',
      security: 'Security',
      contact: 'Contact'
    },
    toggles: {
      light: 'Light Mode',
      dark: 'Dark Mode'
    },
    hero: {
      badge: 'An integrated platform for managing residential communities',
      title: 'Rabaat',
      subtitle: 'Property unites us, decisions connect us',
      description:
        'Rabaat is an intelligent system that connects management with residents, ensures expense transparency, and saves time through centralized dashboards for daily operations and decisions.',
      primaryCta: 'Get Started',
      secondaryCta: 'Request a Demo',
      stats: [
        { value: '+250', label: 'Residential communities' },
        { value: '98%', label: 'Resident satisfaction' },
        { value: '24/7', label: 'Monitoring & requests' }
      ],
      monthlyCard: {
        label: 'Monthly expenses',
        value: 'EGP 120,450',
        badge: 'Live tracking'
      },
      alert: {
        title: 'Urgent maintenance alert',
        description: 'A maintenance request was created for the elevator - Tower 4',
        time: '10 minutes ago',
        status: 'In progress'
      },
      vote: {
        label: 'Board decisions',
        title: 'New vote',
        status: 'Voting opened'
      },
      occupancy: {
        label: 'Occupancy rate',
        value: '92%',
        status: 'Live update'
      }
    },
    why: {
      label: 'Why Rabaat?',
      title: 'A system that makes property management easy and transparent',
      description: 'Everything management and residents need in one platform to organize daily operations and unify decisions.',
      cards: [
        {
          icon: '📊',
          title: 'Complete organization',
          description: 'Central dashboards bring revenues, expenses, and contracts together in one place.'
        },
        {
          icon: '🤝',
          title: 'Full transparency',
          description: 'Track every decision and expense with a clear, shared record.'
        },
        {
          icon: '⚡',
          title: 'Ease of use',
          description: 'A simple interface that supports Arabic and works smoothly on all devices.'
        },
        {
          icon: '🔔',
          title: 'Instant communication',
          description: 'Announcements and alerts reach management and residents in real time.'
        }
      ]
    },
    management: {
      label: 'Smart management',
      title: 'A unified dashboard for every detail',
      description: 'Advanced tools for announcements, decision-making, costs, and subscriptions with real-time reports for transparency.',
      features: ['Instant announcements & alerts', 'Digital voting & decisions', 'Subscription & fee management', 'Resident and worker records', 'Financial & operational reports'],
      cards: [
        {
          title: 'Announcement management',
          description: 'Create announcements and distribute them by buildings and floors.'
        },
        {
          title: 'Governance & decisions',
          description: 'Digitized voting saved with result notifications.'
        },
        {
          title: 'Resident management',
          description: 'Unified profiles for residents, visitors, and staff.'
        },
        {
          title: 'Advanced reporting',
          description: 'Analytics dashboards for expenses, income, and operations.'
        }
      ]
    },
    residents: {
      title: 'A smooth resident experience',
      description: 'A complete app that enables residents to follow everything in their community with ease and security.',
      features: ['Complaints & feedback', 'Payments & receipts', 'Maintenance requests', 'Visitor management', 'Camera alerts (floor-level only)'],
      cards: [
        {
          title: 'Maintenance requests & tracking',
          description: 'Create tickets, track status, and share photos and documents with the operations team.'
        },
        {
          title: 'Flexible digital payments',
          description: 'Pay fees or rent directly with instant notifications and organized payment history.'
        },
        {
          title: 'Camera privacy',
          description: 'Secure monitoring limited to the floor level to ensure resident comfort.'
        }
      ]
    },
    payments: {
      label: 'Online payments',
      title: 'Collect fees and rent easily',
      description: 'A secure collection system for monthly fees and rent with a full payment history.',
      cards: [
        { label: 'Monthly fees', value: 'EGP 600', badge: 'Paid' },
        { label: 'Monthly rent', value: 'EGP 2,200', badge: 'Pending' },
        { label: 'Payment history', value: 'Auto-updated', badge: 'Smart archiving' }
      ],
      dashboard: {
        title: 'Monthly collections dashboard',
        description: 'Monthly collection rates and key performance indicators.',
        note: 'Real-time updates with automated notifications for residents and management.'
      },
      metrics: [
        { label: 'Collection rate', value: '92%', progress: '92%' },
        { label: 'Auto payment', value: '76%', progress: '76%' },
        { label: 'Late requests', value: '8%', progress: '8%' }
      ]
    },
    security: {
      label: 'Security & Privacy',
      title: 'Clear governance and precise permissions',
      description: 'Data protection is a priority, with customized roles and permissions for every stakeholder.',
      cards: [
        { title: 'Roles & permissions', description: 'Flexible management of permissions for admins, residents, and vendors.' },
        { title: 'Data protection', description: 'Encryption and continuous backups to protect information.' },
        { title: 'Full audit', description: 'Detailed activity logs for every decision and financial transaction.' },
        { title: 'Camera privacy', description: 'Monitored within limits while respecting resident privacy.' }
      ],
      highlight: {
        title: 'Camera privacy first',
        description: 'Access limited to the floor level with full encryption and viewing activity tracking.',
        items: [
          { label: 'View log', value: 'Enabled' },
          { label: 'Video encryption', value: '256-bit' },
          { label: 'Privacy alerts', value: 'Instant' }
        ],
        cta: 'Learn about protection policies'
      }
    },
    audience: {
      label: 'Target audience',
      title: 'Designed for every type of community',
      cards: [
        { icon: '🏢', title: 'Owners associations', description: 'Governance and transparency tools for shared property management.' },
        { icon: '🏬', title: 'Residential buildings', description: 'Digitized expense and maintenance management.' },
        { icon: '🏘️', title: 'Residential compounds', description: 'A unified platform for residents, management, and operations.' }
      ]
    },
    cta: {
      title: 'Turn your property management into a smart experience today',
      description: 'Start with Rabaat and enjoy instant communication, clear reports, and a seamless experience for teams and residents.',
      primaryCta: 'Get Started',
      secondaryCta: 'Request a Demo'
    },
    footer: {
      links: {
        why: 'Why Rabaat',
        management: 'Management',
        residents: 'Residents',
        security: 'Security'
      },
      copyright: '© 2024 Rabaat. All rights reserved.'
    }
  }
};

const content = computed(() => messages[language.value]);

watch(theme, (value) => {
  localStorage.setItem('theme', value);
});

watch(language, (value) => {
  localStorage.setItem('language', value);
});

onMounted(() => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'dark' || storedTheme === 'light') {
    setTheme(storedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark');
  } else {
    setTheme('light');
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
