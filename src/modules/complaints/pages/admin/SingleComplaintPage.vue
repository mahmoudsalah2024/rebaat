<template>
  <AdminLayout>
    <div class="space-y-6 py-6">
      <div class="grid gap-6 lg:grid-cols-3">
        <section
          class="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:col-span-2">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p class="text-sm font-semibold text-emerald-600 dark:text-emerald-300">
                {{ $t('pages.complaints.sectionLabel') }}
              </p>
              <h1 class="mt-2 text-2xl font-bold">{{ $t('pages.complaints.details.title') }}</h1>
              <p v-if="complaint" class="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {{ $t('pages.complaints.details.subtitle', { id: complaint?.id }) }}
              </p>
            </div>
            <div class="flex flex-wrap items-center gap-3">
              <a v-if="complaint" :href="`tel:${complaint?.phone}`"
                class="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700">
                {{ $t('pages.complaints.details.callUser') }}
              </a>
              <RouterLink to="/complaints/list"
                class="rounded-full border border-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50 dark:border-emerald-500/30 dark:text-emerald-200 dark:hover:bg-emerald-900/30">
                {{ $t('pages.complaints.details.backToList') }}
              </RouterLink>
            </div>
          </div>

          <div v-if="complaint" class="mt-6 grid gap-4 sm:grid-cols-3">
            <div
              class="rounded-2xl border border-emerald-200/70 bg-emerald-50 p-4 dark:border-emerald-900/30 dark:bg-emerald-900/20">
              <p class="text-xs font-semibold text-emerald-700 dark:text-emerald-200">
                {{ $t('forms.makeComplaint.fields.apartmentNumber') }}
              </p>
              <p class="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
                {{ complaint?.apartmentNumber }}
              </p>
            </div>
            <div class="rounded-2xl border border-slate-200/70 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
              <p class="text-xs font-semibold text-slate-500 dark:text-slate-400">
                {{ $t('forms.makeComplaint.fields.complaintType') }}
              </p>
              <p class="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
                {{ complaint?.complaintType }}
              </p>
            </div>
            <div class="rounded-2xl border border-slate-200/70 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
              <p class="text-xs font-semibold text-slate-500 dark:text-slate-400">
                {{ $t('pages.complaints.details.reportedAt') }}
              </p>
              <p class="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
                {{ reportedAt }}
              </p>
            </div>
          </div>

          <p v-else class="mt-4 text-sm text-slate-500 dark:text-slate-400">
            {{ $t('pages.complaints.details.notFound') }}
          </p>
        </section>
        <section
          class="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div class="flex items-center justify-between gap-3">
            <h2 class="text-lg font-semibold">{{ $t('pages.complaints.details.contactInfo') }}</h2>
            <a :href="`tel:${complaint?.phone}`"
              class="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-emerald-700">
              {{ $t('pages.complaints.details.callUser') }}
            </a>
          </div>
          <dl class="mt-4 space-y-3">
            <div class="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-950">
              <dt class="text-sm text-slate-500 dark:text-slate-400">
                {{ $t('forms.makeComplaint.fields.fullName') }}
              </dt>
              <dd class="text-sm font-semibold text-slate-900 dark:text-slate-100">{{ complaint?.fullName }}</dd>
            </div>
            <div class="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-950">
              <dt class="text-sm text-slate-500 dark:text-slate-400">
                {{ $t('forms.makeComplaint.fields.phone') }}
              </dt>
              <dd class="text-sm font-semibold text-slate-900 dark:text-slate-100">{{ complaint?.phone }}</dd>
            </div>
            <div class="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-950">
              <dt class="text-sm text-slate-500 dark:text-slate-400">
                {{ $t('forms.makeComplaint.fields.email') }}
              </dt>
              <dd class="text-sm font-semibold text-slate-900 dark:text-slate-100">{{ complaint?.email }}</dd>
            </div>
            <div class="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-950">
              <dt class="text-sm text-slate-500 dark:text-slate-400">
                {{ $t('forms.makeComplaint.fields.apartmentNumber') }}
              </dt>
              <dd class="text-sm font-semibold text-slate-900 dark:text-slate-100">{{ complaint?.apartmentNumber }}</dd>
            </div>
          </dl>
        </section>
      </div>
      <div v-if="complaint" class="grid gap-6 lg:grid-cols-3">
        <section
          class="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div class="flex items-center justify-between gap-3">
            <h2 class="text-lg font-semibold">{{ $t('pages.complaints.details.sendNoteTitle') }}</h2>
            <span v-if="noteSent"
              class="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200">
              {{ $t('pages.complaints.details.noteSent') }}
            </span>
          </div>
          <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
            {{ $t('pages.complaints.details.sendNoteDescription') }}
          </p>
          <textarea v-model="adminNote" rows="4"
            class="mt-4 w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-800 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder-slate-500"
            :placeholder="$t('pages.complaints.details.notePlaceholder')" />
          <button type="button" @click="sendNote" :disabled="!adminNote.trim()"
            class="mt-4 inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition"
            :class="[
              adminNote.trim()
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'cursor-not-allowed bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-600'
            ]">
            {{ $t('pages.complaints.details.sendNoteAction') }}
          </button>
        </section>

        <section
          class="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:col-span-2">
          <div class="flex items-center justify-between gap-3">
            <h2 class="text-lg font-semibold">{{ $t('pages.complaints.details.complaintInfo') }}</h2>
          </div>

          <div class="mt-4 grid gap-4 sm:grid-cols-2">
            <div class="rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-950">
              <p class="text-xs font-semibold text-slate-500 dark:text-slate-400">
                {{ $t('forms.makeComplaint.fields.complaintType') }}
              </p>
              <p class="mt-2 text-base font-semibold text-slate-900 dark:text-slate-100">{{ complaint?.complaintType }}
              </p>
            </div>
            <div class="rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-950">
              <p class="text-xs font-semibold text-slate-500 dark:text-slate-400">
                {{ $t('pages.complaints.details.dateTime') }}
              </p>
              <p class="mt-2 text-base font-semibold text-slate-900 dark:text-slate-100">
                {{ complaint?.complaintDate }} {{ complaint?.complaintTime }}
              </p>
            </div>
          </div>

          <div
            class="mt-6 rounded-2xl border border-slate-200/70 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
            <p class="text-xs font-semibold text-slate-500 dark:text-slate-400">
              {{ $t('pages.complaints.details.description') }}
            </p>
            <p class="mt-3 text-sm leading-relaxed text-slate-800 dark:text-slate-200">
              {{ complaint?.problemDescription }}
            </p>
          </div>

          <div v-if="complaint?.notes"
            class="mt-4 rounded-2xl border border-emerald-200/70 bg-emerald-50 p-4 dark:border-emerald-900/30 dark:bg-emerald-900/20">
            <p class="text-xs font-semibold text-emerald-700 dark:text-emerald-200">
              {{ $t('pages.complaints.details.notes') }}
            </p>
            <p class="mt-3 text-sm leading-relaxed text-slate-800 dark:text-slate-100">
              {{ complaint?.notes }}
            </p>
          </div>
        </section>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { mockComplaints } from '@/modules/complaints/api/complaints.mock';
import type { ComplaintData } from '@/modules/complaints/types/complaintData.model';

const route = useRoute();
const id = route.params.id as string;

const complaints: ComplaintData[] = mockComplaints;

const complaint = computed(() => complaints.find((item) => item.id === id));

const adminNote = ref('');
const noteSent = ref(false);

const sendNote = () => {
  if (!complaint?.value || !adminNote.value.trim()) return;
  noteSent.value = true;
};

const reportedAt = computed(() => {
  if (!complaint?.value) return '';

  return complaint?.value.createdAt.toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
});
</script>
