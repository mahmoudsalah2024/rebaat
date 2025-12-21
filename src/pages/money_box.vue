<template>
  <MainLayout>
    <div class="space-y-8">
      <section
        class="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
      >
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p class="text-sm font-semibold text-emerald-600 dark:text-emerald-300">{{ $t('pages.moneyBox.accountSummaryLabel') }}</p>
            <p class="mt-2 text-2xl font-bold">{{ $t('pages.moneyBox.title') }}</p>
          </div>
        </div>
        <div class="mt-8 flex flex-col gap-4">
          <div v-if="outcome !== income" class="rounded-2xl bg-slate-50 p-4 text-start dark:bg-slate-950">
            <p class="text-sm text-slate-500 dark:text-slate-400">{{ $t('common.labels.balance') }}</p>
            <p class="mt-2 text-3xl font-semibold">
              {{ credit }}
              <span class="text-sm font-light text-slate-500 dark:text-slate-400">{{ $t('common.currency.egp') }}</span>
            </p>
          </div>
          <div class="grid gap-4 grid-cols-3">
            <div
              class="rounded-2xl border border-emerald-200/70 bg-emerald-50 p-4 text-start dark:border-emerald-900/30 dark:bg-emerald-900/20"
            >
              <p class="text-sm text-emerald-700 dark:text-emerald-200">{{ $t('common.labels.income') }}</p>
              <p class="mt-2 text-xl font-semibold">
                {{ income }}
                <span class="text-sm font-light text-emerald-600/80 dark:text-emerald-200/80">{{ $t('common.currency.egp') }}</span>
              </p>
            </div>
            <div
              class="rounded-2xl border border-amber-200/70 bg-amber-50 p-4 text-start dark:border-amber-900/30 dark:bg-amber-900/20"
            >
              <p class="text-sm text-slate-500 dark:text-slate-400">{{ $t('common.labels.expenses') }}</p>
              <p class="mt-2 text-xl font-semibold">
                {{ outcome }}
                <span class="text-sm font-light text-slate-500 dark:text-slate-400">{{ $t('common.currency.egp') }}</span>
              </p>
            </div>
            <div
              v-if="outcome === income"
              class="rounded-2xl border border-slate-200/70 bg-white p-4 text-start dark:border-slate-800 dark:bg-slate-900"
            >
              <p class="text-sm text-slate-500 dark:text-slate-400">{{ $t('common.labels.balance') }}</p>
              <p class="mt-2 text-xl font-semibold">
                {{ credit }}
                <span class="text-sm font-light text-slate-500 dark:text-slate-400">{{ $t('common.currency.egp') }}</span>
              </p>
            </div>
            <div
              v-if="outcome !== income"
              class="rounded-2xl border border-red-200/70 bg-red-50 p-4 text-start dark:border-red-900/30 dark:bg-red-900/20"
            >
              <p class="text-sm text-slate-500 dark:text-slate-400">{{ $t('common.labels.debt') }}</p>
              <p class="mt-2 text-xl font-semibold">
                {{ debited }}
                <span class="text-sm font-light text-slate-500 dark:text-slate-400">{{ $t('common.currency.egp') }}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        class="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
      >
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p class="text-sm font-semibold text-emerald-600 dark:text-emerald-300">{{ $t('pages.moneyBox.accountDetailsLabel') }}</p>
            <p class="mt-2 text-2xl font-bold">{{ $t('pages.moneyBox.transactionsTitle') }}</p>
          </div>
        </div>
        <div
          class="mt-6 overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-50 dark:border-slate-800 dark:bg-slate-950"
        >
          <div style="z-index: 0 !important;">
            <!-- Flowbite Tabs Header -->
            <div
              role="tablist"
              class="border-b border-slate-200/70 bg-white/80 px-4 py-2 dark:border-slate-800 dark:bg-slate-900/80 flex gap-2"
            >
              <button
                role="tab"
                @click="tab = 'one'"
                :aria-selected="tab === 'one'"
                aria-controls="panel-one"
                :class="tab === 'one' ? 'border-b-2 border-primary text-primary' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'"
                class="px-3 py-2 text-sm font-medium transition"
              >
                {{ $t('pages.moneyBox.tabs.income') }}
              </button>
              <button
                role="tab"
                @click="tab = 'two'"
                :aria-selected="tab === 'two'"
                aria-controls="panel-two"
                :class="tab === 'two' ? 'border-b-2 border-primary text-primary' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'"
                class="px-3 py-2 text-sm font-medium transition"
              >
                {{ $t('pages.moneyBox.tabs.expenses') }}
              </button>
              <button
                role="tab"
                @click="tab = 'three'"
                :aria-selected="tab === 'three'"
                aria-controls="panel-three"
                :class="tab === 'three' ? 'border-b-2 border-primary text-primary' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'"
                class="px-3 py-2 text-sm font-medium transition"
              >
                {{ $t('pages.moneyBox.tabs.debt') }}
              </button>
            </div>
            <!-- Flowbite Tabs Content -->
            <div class="p-4">
              <!-- Tab 1: الأيرادات -->
              <div v-show="tab === 'one'" role="tabpanel" id="panel-one">
                <div class="overflow-x-auto">
                  <table class="w-full border-collapse text-sm">
                    <thead>
                      <tr class="bg-emerald-600 text-white">
                        <th class="border border-emerald-700/40 p-2">{{ $t('pages.moneyBox.table.number') }}</th>
                        <th class="border border-emerald-700/40 p-2">{{ $t('pages.moneyBox.table.item') }}</th>
                        <th class="border border-emerald-700/40 p-2">{{ $t('pages.moneyBox.table.income') }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(invoice, i) in paginatedInvoices" :key="i" class="bg-white even:bg-slate-50 dark:bg-slate-900 dark:even:bg-slate-950">
                        <td class="border border-slate-200/70 p-2 text-slate-700 dark:border-slate-800 dark:text-slate-200">
                          {{ (currentPage - 1) * pageSize + i + 1 }}
                        </td>
                        <td
                          class="border border-slate-200/70 p-2 text-slate-700 dark:border-slate-800 dark:text-slate-200"
                          v-for="(type, index) in types"
                          :key="index"
                        >
                          {{ $t(type) }}
                        </td>
                        <td class="border border-slate-200/70 p-2 text-slate-700 dark:border-slate-800 dark:text-slate-200">
                          {{ invoice.income }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="mt-4 flex flex-wrap items-center justify-center gap-4">
                  <button
                    @click="currentPage--"
                    :disabled="currentPage === 1"
                    :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }"
                    class="rounded-full border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:border-emerald-400 dark:border-emerald-500/30 dark:text-emerald-200"
                  >
                    {{ $t('common.actions.previous') }}
                  </button>
                  <button
                    @click="currentPage++"
                    :disabled="currentPage >= Math.ceil(invoices.length / pageSize)"
                    :class="{ 'opacity-50 cursor-not-allowed': currentPage >= Math.ceil(invoices.length / pageSize) }"
                    class="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-700"
                  >
                    {{ $t('common.actions.next') }}
                  </button>
                </div>
              </div>
              <!-- Tab 2: المصروفات -->
              <div v-show="tab === 'two'" role="tabpanel" id="panel-two">
                <div class="overflow-x-auto">
                  <table class="w-full border-collapse text-sm">
                    <thead>
                      <tr class="bg-emerald-600 text-white">
                        <th class="border border-emerald-700/40 p-2">{{ $t('pages.moneyBox.table.number') }}</th>
                        <th class="border border-emerald-700/40 p-2">{{ $t('pages.moneyBox.table.expenses') }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(invoice, i) in paginatedInvoices" :key="i" class="bg-white even:bg-slate-50 dark:bg-slate-900 dark:even:bg-slate-950">
                        <td class="border border-slate-200/70 p-2 text-slate-700 dark:border-slate-800 dark:text-slate-200">
                          {{ (currentPage - 1) * pageSize + i + 1 }}
                        </td>
                        <td class="border border-slate-200/70 p-2 text-slate-700 dark:border-slate-800 dark:text-slate-200">
                          {{ invoice.outcome }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="mt-4 flex flex-wrap items-center justify-center gap-4">
                  <button
                    @click="currentPage--"
                    :disabled="currentPage === 1"
                    :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }"
                    class="rounded-full border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:border-emerald-400 dark:border-emerald-500/30 dark:text-emerald-200"
                  >
                    {{ $t('common.actions.previous') }}
                  </button>
                  <button
                    @click="currentPage++"
                    :disabled="currentPage >= Math.ceil(invoices.length / pageSize)"
                    :class="{ 'opacity-50 cursor-not-allowed': currentPage >= Math.ceil(invoices.length / pageSize) }"
                    class="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-700"
                  >
                    {{ $t('common.actions.next') }}
                  </button>
                </div>
              </div>
              <!-- Tab 3: المديونية -->
              <div v-show="tab === 'three'" role="tabpanel" id="panel-three">
                <div class="overflow-x-auto">
                  <table class="w-full border-collapse text-sm">
                    <thead>
                      <tr class="bg-emerald-600 text-white">
                        <th class="border border-emerald-700/40 p-2">{{ $t('pages.moneyBox.table.number') }}</th>
                        <th class="border border-emerald-700/40 p-2">{{ $t('pages.moneyBox.table.debt') }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(invoice, i) in paginatedInvoices" :key="i" class="bg-white even:bg-slate-50 dark:bg-slate-900 dark:even:bg-slate-950">
                        <td class="border border-slate-200/70 p-2 text-slate-700 dark:border-slate-800 dark:text-slate-200">
                          {{ (currentPage - 1) * pageSize + i + 1 }}
                        </td>
                        <td class="border border-slate-200/70 p-2 text-slate-700 dark:border-slate-800 dark:text-slate-200">
                          {{ invoice.income }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="mt-4 flex flex-wrap items-center justify-center gap-4">
                  <button
                    @click="currentPage--"
                    :disabled="currentPage === 1"
                    :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }"
                    class="rounded-full border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:border-emerald-400 dark:border-emerald-500/30 dark:text-emerald-200"
                  >
                    {{ $t('common.actions.previous') }}
                  </button>
                  <button
                    @click="currentPage++"
                    :disabled="currentPage >= Math.ceil(invoices.length / pageSize)"
                    :class="{ 'opacity-50 cursor-not-allowed': currentPage >= Math.ceil(invoices.length / pageSize) }"
                    class="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-700"
                  >
                    {{ $t('common.actions.next') }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import { ref, computed } from 'vue';
const tab = ref('one');
const pageSize = ref(15);
const currentPage = ref(1);
const income = ref(25000);
const outcome = ref(30000);
const debited = ref(5000);
const credit = ref(-5000);
const types = ['common.billing.monthly'];
const invoices = ref(
  Array.from({ length: 100 }, (_, i) => ({
    income: 1000 + i * 10,
    outcome: 500 + i * 5,
    balance: 500 + i * 5
  }))
);
const paginatedInvoices = computed(() => invoices.value.slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value));
</script>
