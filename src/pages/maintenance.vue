<template>
  <MainLayout>
    <div class="space-y-6">
      <section
        class="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
      >
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p class="text-sm font-semibold text-emerald-600 dark:text-emerald-300">{{ $t('pages.maintenance.sectionLabel') }}</p>
            <h2 class="mt-2 text-2xl font-bold">{{ $t('pages.maintenance.title') }}</h2>
          </div>
        </div>
        <!-- الفلترة -->
        <div class="mt-6 flex flex-wrap gap-2">
          <button
            v-for="s in statuses"
            :key="s"
            @click="selectedStatus = s"
            class="rounded-full border px-4 py-2 text-xs font-semibold transition"
            :class="[
              selectedStatus === s
                ? 'border-emerald-500 bg-emerald-600 text-white'
                : 'border-slate-200 bg-white text-slate-700 hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'
            ]"
          >
            {{ $t(s) }}
          </button>
          <button
            @click="selectedStatus = ''"
            class="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
          >
            {{ $t('common.filters.all') }}
          </button>
        </div>
      </section>
      <!-- جدول لأجهزة الكمبيوتر -->
      <div
        class="hidden overflow-x-auto rounded-3xl border border-slate-200/70 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:block"
      >
        <table class="min-w-full text-sm text-right">
          <thead class="bg-emerald-600 text-white">
            <tr>
              <th class="px-4 py-3">{{ $t('pages.maintenance.table.date') }}</th>
              <th class="px-4 py-3">{{ $t('pages.maintenance.table.startTime') }}</th>
              <th class="px-4 py-3">{{ $t('pages.maintenance.table.endTime') }}</th>
              <th class="px-4 py-3">{{ $t('pages.maintenance.table.type') }}</th>
              <th class="px-4 py-3">{{ $t('pages.maintenance.table.status') }}</th>
              <th class="px-4 py-3">{{ $t('pages.maintenance.table.responsible') }}</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
            <tr v-for="(item, i) in filteredData" :key="i" class="bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-950">
              <td class="px-4 py-3 text-slate-700 dark:text-slate-200">{{ item.date }}</td>
              <td class="px-4 py-3 text-slate-700 dark:text-slate-200">{{ item.start }}</td>
              <td class="px-4 py-3 text-slate-700 dark:text-slate-200">{{ item.end }}</td>
              <td class="px-4 py-3 text-slate-700 dark:text-slate-200">{{ $t(item.type) }}</td>
              <td class="px-4 py-3">
                <span class="inline-block rounded-full px-2 py-0.5 text-xs font-semibold" :class="statusColor(item.status)">
                  {{ $t(item.status) }}
                </span>
              </td>
              <td class="px-4 py-3 text-slate-700 dark:text-slate-200">{{ $t(item.responsible) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- بطاقات للموبايل -->
      <div class="block space-y-4 sm:hidden">
        <div
          v-for="(item, i) in filteredData"
          :key="i"
          class="rounded-3xl border border-slate-200/70 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <div class="flex items-start justify-between gap-4">
            <div>
              <div class="text-sm font-semibold text-slate-900 dark:text-slate-100">{{ item.date }}</div>
              <div class="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {{ $t('pages.maintenance.mobileSummary', { type: $t(item.type), responsible: $t(item.responsible) }) }}
              </div>
            </div>
            <div class="text-right">
              <div class="text-sm text-slate-700 dark:text-slate-300">{{ $t('common.format.timeRange', { start: item.start, end: item.end }) }}</div>
              <div class="mt-2">
                <span class="inline-block rounded-full px-2 py-0.5 text-xs font-semibold" :class="statusColor(item.status)">
                  {{ $t(item.status) }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- في حال مفيش نتائج -->
      <p v-if="filteredData.length === 0" class="text-center text-sm text-slate-500 dark:text-slate-400">
        {{ $t('pages.maintenance.empty') }}
      </p>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import MainLayout from '@/layouts/MainLayout.vue';

const statuses = ['common.status.scheduled', 'common.status.completed', 'common.status.postponed'] as const;

type StatusKey = (typeof statuses)[number];

type MaintenanceRow = {
  date: string;
  start: string;
  end: string;
  type: string;
  status: StatusKey;
  responsible: string;
};

const data = ref<MaintenanceRow[]>([
  {
    date: '2025-10-10',
    start: '09:00',
    end: '11:30',
    type: 'pages.maintenance.types.electrical',
    status: 'common.status.scheduled',
    responsible: 'pages.maintenance.responsible.ahmedAli'
  },
  {
    date: '2025-10-12',
    start: '14:00',
    end: '16:00',
    type: 'pages.maintenance.types.plumbing',
    status: 'common.status.completed',
    responsible: 'pages.maintenance.responsible.monaHussein'
  },
  {
    date: '2025-10-15',
    start: '10:00',
    end: '12:00',
    type: 'pages.maintenance.types.tankCleaning',
    status: 'common.status.postponed',
    responsible: 'pages.maintenance.responsible.khaledMostafa'
  }
]);

const selectedStatus = ref<StatusKey | ''>('');

const filteredData = computed(() =>
  selectedStatus.value
    ? data.value.filter((d) => d.status === selectedStatus.value)
    : data.value
);

const statusColor = (status: StatusKey) => {
  return {
    'common.status.scheduled': 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200',
    'common.status.completed': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200',
    'common.status.postponed': 'bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-200'
  }[status];
};
</script>
