<template>
    <div class="space-y-6">
      <section class="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p class="text-sm font-semibold text-emerald-600 dark:text-emerald-300">{{ $t('forms.makeComplaint.sectionLabel') }}</p>
            <h1 class="mt-2 text-2xl font-bold">{{ $t('forms.makeComplaint.title') }}</h1>
          </div>
        </div>
      </section>

      <form @submit.prevent="handleSubmit" class="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div class="grid gap-6 md:grid-cols-2">
          <!-- الاسم -->
          <div class="space-y-2">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">{{ $t('forms.makeComplaint.fields.fullName') }}</label>
            <input v-model="form.fullName" type="text" class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200" required />
          </div>

          <!-- الهاتف -->
          <div class="space-y-2">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">{{ $t('forms.makeComplaint.fields.phone') }}</label>
            <input v-model="form.phone" type="tel" class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200" required />
          </div>

          <!-- البريد -->
          <div class="space-y-2">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">{{ $t('forms.makeComplaint.fields.email') }}</label>
            <input v-model="form.email" type="email" class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200" />
          </div>

          <!-- تفاصيل العقار -->
          <div class="space-y-2">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">{{ $t('forms.makeComplaint.fields.apartmentNumber') }}</label>
            <input v-model="form.apartmentNumber" type="text" class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200" />
          </div>

          <!-- نوع المشكلة -->
          <div class="space-y-2">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">{{ $t('forms.makeComplaint.fields.complaintType') }}</label>
            <select v-model="form.complaintType" class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
              <option value="">{{ $t('forms.makeComplaint.options.selectType') }}</option>
              <option value="resident">{{ $t('forms.makeComplaint.options.resident') }}</option>
              <option value="worker">{{ $t('forms.makeComplaint.options.worker') }}</option>
              <option value="externalWorker">{{ $t('forms.makeComplaint.options.externalWorker') }}</option>
              <option value="collector">{{ $t('forms.makeComplaint.options.collector') }}</option>
              <option value="other">{{ $t('forms.makeComplaint.options.other') }}</option>
            </select>
          </div>

          <!-- وصف المشكلة -->
          <div class="space-y-2 md:col-span-2">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">{{ $t('forms.makeComplaint.fields.problemDescription') }}</label>
            <textarea v-model="form.problemDescription" rows="4" class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"></textarea>
          </div>

          <!-- التاريخ والوقت -->
          <div class="grid gap-4 md:col-span-2 md:grid-cols-2">
            <div class="space-y-2">
              <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">{{ $t('forms.makeComplaint.fields.complaintDate') }}</label>
              <input v-model="form.complaintDate" type="date" class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">{{ $t('forms.makeComplaint.fields.complaintTime') }}</label>
              <input v-model="form.complaintTime" type="time" class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200" />
            </div>
          </div>

          <!-- ملاحظات -->
          <div class="space-y-2 md:col-span-2">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">{{ $t('forms.makeComplaint.fields.notes') }}</label>
            <textarea v-model="form.notes" rows="3" class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"></textarea>
          </div>
        </div>

        <!-- زر الإرسال -->
        <div class="mt-8 flex justify-end">
          <button type="submit" class="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-700">
            {{ $t('forms.makeComplaint.submit') }}
          </button>
        </div>
      </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { ComplaintForm } from '../types/complaintForm.model';

const form = ref<ComplaintForm>({
  fullName: '',
  phone: '',
  email: '',
  apartmentNumber: '',
  complaintType: '',
  problemDescription: '',
  complaintDate: '',
  complaintTime: '',
  notes: ''
});

const handleSubmit = () => {
  console.log('Form submitted:', form.value);
  // تقدر تبعت الداتا هنا بـ fetch أو axios للـ API
};
</script>
