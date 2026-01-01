<template>
  <AdminLayout>
    <div class="space-y-6">
      <section
        class="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p class="text-sm font-semibold text-emerald-600 dark:text-emerald-300">{{
              $t('pages.complaints.sectionLabel') }}</p>
            <h2 class="mt-2 text-2xl font-bold">{{ $t('pages.complaints.title') }}</h2>
          </div>
        </div>
        <div class="mt-6">
          <input
            v-model="searchQuery"
            type="text"
            :placeholder="$t('pages.complaints.search.placeholder')"
            class="w-full rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:placeholder-slate-500"
          />
        </div>
      </section>

      <!-- Desktop Table -->
      <div
        class="hidden overflow-x-auto rounded-3xl border border-slate-200/70 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:block">
        <table class="min-w-full text-sm text-right">
          <thead class="bg-emerald-600 text-white">
            <tr>
              <th class="text-start px-4 py-3">{{ $t('pages.complaints.table.id') }}</th>
              <th class="text-start px-4 py-3">{{ $t('pages.complaints.table.name') }}</th>
              <th class="text-start px-4 py-3">{{ $t('pages.complaints.table.apartment') }}</th>
              <th class="text-start px-4 py-3">{{ $t('pages.complaints.table.type') }}</th>
              <th class="text-start px-4 py-3">{{ $t('pages.complaints.table.dateTime') }}</th>
              <th class="text-start px-4 py-3">{{ $t('pages.complaints.table.description') }}</th>
              <th class="text-start px-4 py-3">{{ $t('pages.complaints.table.notes') }}</th>
              <th class="text-start px-4 py-3">{{ $t('common.actions.details') }}</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
            <tr v-for="complaint in paginatedData" :key="complaint.id"
              class="bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-950">
              <td class="text-start px-4 py-3 text-slate-700 dark:text-slate-200">{{ complaint.id }}</td>
              <td class="text-start px-4 py-3 text-slate-700 dark:text-slate-200">{{ complaint.fullName }}</td>
              <td class="text-start px-4 py-3 text-slate-700 dark:text-slate-200">{{ complaint.apartmentNumber }}</td>
              <td class="text-start px-4 py-3 text-slate-700 dark:text-slate-200">{{ complaint.complaintType }}</td>
              <td class="text-start px-4 py-3 text-slate-700 dark:text-slate-200">{{ complaint.complaintDate }} {{
                complaint.complaintTime }}</td>
              <td class="text-start px-4 py-3 text-slate-700 dark:text-slate-200">{{ complaint.problemDescription }}</td>
              <td class="text-start px-4 py-3 text-slate-700 dark:text-slate-200">{{ complaint.notes }}</td>
              <td class="text-start px-4 py-3 text-right">
                <RouterLink
                  :to="`/complaints/${complaint.id}`"
                  class="inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-emerald-700"
                >
                  {{ $t('common.actions.viewDetails') }}
                </RouterLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Mobile Cards -->
      <div class="block space-y-4 sm:hidden">
        <div v-for="complaint in paginatedData" :key="complaint.id"
          class="rounded-3xl border border-slate-200/70 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div class="flex items-start justify-between gap-4">
            <div>
              <div class="text-sm font-semibold text-slate-900 dark:text-slate-100">{{ complaint.fullName }}</div>
              <div class="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {{ complaint.complaintType }} — {{ $t('pages.complaints.table.apartment') }}: {{
                  complaint.apartmentNumber }}
              </div>
            </div>
            <div class="text-right">
              <div class="text-sm text-slate-700 dark:text-slate-300">{{ complaint.complaintDate }}</div>
              <div class="text-xs text-slate-500 dark:text-slate-400">{{ complaint.complaintTime }}</div>
            </div>
          </div>
          <div class="mt-3 text-sm text-slate-700 dark:text-slate-200">{{ complaint.problemDescription }}</div>
          <div v-if="complaint.notes" class="mt-2 text-xs text-slate-500 dark:text-slate-400">{{ complaint.notes }}
          </div>
          <RouterLink
            :to="`/complaints/${complaint.id}`"
            class="mt-3 inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-emerald-700"
          >
            {{ $t('common.actions.viewDetails') }}
          </RouterLink>
        </div>
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="flex items-center justify-center gap-4">
        <button
          @click="currentPage--"
          :disabled="currentPage === 1"
          class="rounded-full border px-6 py-2 text-sm font-semibold transition"
          :class="[
            currentPage === 1
              ? 'border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed dark:border-slate-700 dark:bg-slate-800 dark:text-slate-600'
              : 'border-emerald-500 bg-emerald-600 text-white hover:bg-emerald-700'
          ]"
        >
          {{ $t('pages.complaints.pagination.previous') }}
        </button>
        <span class="text-sm text-slate-700 dark:text-slate-300">
          {{ $t('pages.complaints.pagination.pageInfo', { current: currentPage, total: totalPages }) }}
        </span>
        <button
          @click="currentPage++"
          :disabled="currentPage === totalPages"
          class="rounded-full border px-6 py-2 text-sm font-semibold transition"
          :class="[
            currentPage === totalPages
              ? 'border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed dark:border-slate-700 dark:bg-slate-800 dark:text-slate-600'
              : 'border-emerald-500 bg-emerald-600 text-white hover:bg-emerald-700'
          ]"
        >
          {{ $t('pages.complaints.pagination.next') }}
        </button>
      </div>

      <!-- Empty State -->
      <p v-if="filteredComplaints.length === 0" class="text-center text-sm text-slate-500 dark:text-slate-400">
        {{ $t('pages.complaints.empty') }}
      </p>
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';
import { ref, computed } from 'vue';
import { mockComplaints } from '@/modules/complaints/api/complaints.mock';
import type { ComplaintData } from '@/modules/complaints/types/complaintData.model';

const complaints = ref<ComplaintData[]>(mockComplaints);

const searchQuery = ref('')
const itemsPerPage = 4
const currentPage = ref(1)

const filteredComplaints = computed(() => {
  if (!searchQuery.value.trim()) {
    return complaints.value
  }

  const query = searchQuery.value.toLowerCase()
  return complaints.value.filter((complaint) => {
    return (
      complaint.fullName.toLowerCase().includes(query) ||
      complaint.apartmentNumber.toLowerCase().includes(query) ||
      complaint.complaintType.toLowerCase().includes(query) ||
      complaint.complaintDate.toLowerCase().includes(query) ||
      complaint.complaintTime.toLowerCase().includes(query)
    )
  })
})

const totalPages = computed(() => Math.ceil(filteredComplaints.value.length / itemsPerPage))

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredComplaints.value.slice(start, start + itemsPerPage)
})

</script>
