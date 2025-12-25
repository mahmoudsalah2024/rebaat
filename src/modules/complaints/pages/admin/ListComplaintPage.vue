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
              <th class="px-4 py-3">{{ $t('pages.complaints.table.id') }}</th>
              <th class="px-4 py-3">{{ $t('pages.complaints.table.name') }}</th>
              <th class="px-4 py-3">{{ $t('pages.complaints.table.apartment') }}</th>
              <th class="px-4 py-3">{{ $t('pages.complaints.table.type') }}</th>
              <th class="px-4 py-3">{{ $t('pages.complaints.table.dateTime') }}</th>
              <th class="px-4 py-3">{{ $t('pages.complaints.table.description') }}</th>
              <th class="px-4 py-3">{{ $t('pages.complaints.table.notes') }}</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
            <tr v-for="complaint in paginatedData" :key="complaint.id"
              class="bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-950">
              <td class="px-4 py-3 text-slate-700 dark:text-slate-200">{{ complaint.id }}</td>
              <td class="px-4 py-3 text-slate-700 dark:text-slate-200">{{ complaint.fullName }}</td>
              <td class="px-4 py-3 text-slate-700 dark:text-slate-200">{{ complaint.apartmentNumber }}</td>
              <td class="px-4 py-3 text-slate-700 dark:text-slate-200">{{ complaint.complaintType }}</td>
              <td class="px-4 py-3 text-slate-700 dark:text-slate-200">{{ complaint.complaintDate }} {{
                complaint.complaintTime }}</td>
              <td class="px-4 py-3 text-slate-700 dark:text-slate-200">{{ complaint.problemDescription }}</td>
              <td class="px-4 py-3 text-slate-700 dark:text-slate-200">{{ complaint.notes }}</td>
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
import type { ComplaintData } from '@/modules/complaints/types/complaintData.model';

const complaints = ref<ComplaintData[]>([
  {
    id: '1',
    fullName: 'Ahmed Hassan',
    phone: '+966501234567',
    email: 'ahmed@example.com',
    apartmentNumber: '101',
    complaintType: 'Noise',
    problemDescription: 'Excessive noise from neighboring unit',
    complaintDate: '2024-01-15',
    complaintTime: '14:30',
    notes: 'Follow up required',
    createdAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    fullName: 'Fatima Al-Otaibi',
    phone: '+966502345678',
    email: 'fatima@example.com',
    apartmentNumber: '205',
    complaintType: 'Maintenance',
    problemDescription: 'Broken water pipe in bathroom',
    complaintDate: '2024-01-14',
    complaintTime: '10:15',
    notes: 'Urgent repair needed',
    createdAt: new Date('2024-01-14'),
  },
  {
    id: '3',
    fullName: 'Mohammed Ibrahim',
    phone: '+966503456789',
    email: 'mohammed@example.com',
    apartmentNumber: '302',
    complaintType: 'Cleanliness',
    problemDescription: 'Common areas not cleaned properly',
    complaintDate: '2024-01-13',
    complaintTime: '09:00',
    notes: 'Assign cleaning staff',
    createdAt: new Date('2024-01-13'),
  },
  {
    id: '4',
    fullName: 'Layla Ahmed',
    phone: '+966504567890',
    email: 'layla@example.com',
    apartmentNumber: '103',
    complaintType: 'Electricity',
    problemDescription: 'Power outage in kitchen',
    complaintDate: '2024-01-12',
    complaintTime: '16:45',
    notes: 'Check circuit breaker',
    createdAt: new Date('2024-01-12'),
  },
  {
    id: '5',
    fullName: 'Omar Khalil',
    phone: '+966505678901',
    email: 'omar@example.com',
    apartmentNumber: '401',
    complaintType: 'Pest Control',
    problemDescription: 'Cockroaches in kitchen area',
    complaintDate: '2024-01-11',
    complaintTime: '11:20',
    notes: 'Schedule pest control visit',
    createdAt: new Date('2024-01-11'),
  },
  {
    id: '6',
    fullName: 'Noor Saeed',
    phone: '+966506789012',
    email: 'noor@example.com',
    apartmentNumber: '204',
    complaintType: 'Parking',
    problemDescription: 'Unauthorized vehicle in reserved spot',
    complaintDate: '2024-01-10',
    complaintTime: '13:30',
    notes: 'Issue parking violation notice',
    createdAt: new Date('2024-01-10'),
  },
  {
    id: '7',
    fullName: 'Salim Abdullah',
    phone: '+966507890123',
    email: 'salim@example.com',
    apartmentNumber: '305',
    complaintType: 'Plumbing',
    problemDescription: 'Leaking faucet in bathroom',
    complaintDate: '2024-01-09',
    complaintTime: '15:00',
    notes: 'Replace faucet',
    createdAt: new Date('2024-01-09'),
  },
  {
    id: '8',
    fullName: 'Hana Mustafa',
    phone: '+966508901234',
    email: 'hana@example.com',
    apartmentNumber: '102',
    complaintType: 'Heating',
    problemDescription: 'Heater not working properly',
    complaintDate: '2024-01-08',
    complaintTime: '12:15',
    notes: 'Winter emergency repair',
    createdAt: new Date('2024-01-08'),
  },
  {
    id: '9',
    fullName: 'Karim Hassan',
    phone: '+966509012345',
    email: 'karim@example.com',
    apartmentNumber: '403',
    complaintType: 'Internet',
    problemDescription: 'Slow internet connection',
    complaintDate: '2024-01-07',
    complaintTime: '17:45',
    notes: 'Contact ISP',
    createdAt: new Date('2024-01-07'),
  },
  {
    id: '10',
    fullName: 'Rania Khalid',
    phone: '+966510123456',
    email: 'rania@example.com',
    apartmentNumber: '206',
    complaintType: 'Security',
    problemDescription: 'Broken lobby door lock',
    complaintDate: '2024-01-06',
    complaintTime: '08:30',
    notes: 'Replace lock immediately',
    createdAt: new Date('2024-01-06'),
  },
]);

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
