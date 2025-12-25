<template>
    <div class="space-y-6">
      <section
        class="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
      >
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p class="text-sm font-semibold text-emerald-600 dark:text-emerald-300">{{ $t('forms.orderMaintenance.sectionLabel') }}</p>
            <h1 class="mt-2 text-2xl font-bold">{{ $t('forms.orderMaintenance.title') }}</h1>
          </div>
        </div>
      </section>

      <form
        @submit.prevent="handleSubmit"
        class="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
      >
        <div class="grid gap-6 md:grid-cols-2">
          <!-- الاسم -->
          <div class="space-y-2">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">{{ $t('forms.orderMaintenance.fields.fullName') }}</label>
            <input
              v-model="form.fullName"
              type="text"
              class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
              required
            />
          </div>

          <!-- الهاتف -->
          <div class="space-y-2">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">{{ $t('forms.orderMaintenance.fields.phone') }}</label>
            <input
              v-model="form.phone"
              type="tel"
              class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
              required
            />
          </div>

          <!-- البريد -->
          <div class="space-y-2">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">{{ $t('forms.orderMaintenance.fields.email') }}</label>
            <input
              v-model="form.email"
              type="email"
              class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
            />
          </div>

          <!-- تفاصيل العقار -->
          <div class="space-y-2">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">{{ $t('forms.orderMaintenance.fields.apartmentNumber') }}</label>
            <input
              v-model="form.apartmentNumber"
              type="text"
              class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
            />
          </div>

          <!-- نوع الصيانة -->
          <div class="space-y-2">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">{{ $t('forms.orderMaintenance.fields.maintenanceType') }}</label>
            <select
              v-model="form.maintenanceType"
              class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
            >
              <option value="">{{ $t('forms.orderMaintenance.options.selectType') }}</option>
              <option value="electrical">{{ $t('forms.orderMaintenance.options.electrical') }}</option>
              <option value="plumbing">{{ $t('forms.orderMaintenance.options.plumbing') }}</option>
              <option value="painting">{{ $t('forms.orderMaintenance.options.painting') }}</option>
              <option value="carpentry">{{ $t('forms.orderMaintenance.options.carpentry') }}</option>
              <option value="airConditioning">{{ $t('forms.orderMaintenance.options.airConditioning') }}</option>
              <option value="other">{{ $t('forms.orderMaintenance.options.other') }}</option>
            </select>
          </div>

          <!-- وصف المشكلة -->
          <div class="space-y-2 md:col-span-2">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">{{ $t('forms.orderMaintenance.fields.problemDescription') }}</label>
            <textarea
              v-model="form.problemDescription"
              rows="4"
              class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
            ></textarea>
          </div>

          <!-- الأولوية -->
          <div class="space-y-2">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">{{ $t('forms.orderMaintenance.fields.priority') }}</label>
            <select
              v-model="form.priority"
              class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
            >
              <option value="normal">{{ $t('forms.orderMaintenance.options.priority.normal') }}</option>
              <option value="urgent">{{ $t('forms.orderMaintenance.options.priority.urgent') }}</option>
              <option value="emergency">{{ $t('forms.orderMaintenance.options.priority.emergency') }}</option>
            </select>
          </div>

          <!-- الغرفة -->
          <div class="space-y-2">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">{{ $t('forms.orderMaintenance.fields.room') }}</label>
            <select
              v-model="form.room"
              class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
            >
              <option value="livingRoom">{{ $t('forms.orderMaintenance.options.room.livingRoom') }}</option>
              <option value="kitchen">{{ $t('forms.orderMaintenance.options.room.kitchen') }}</option>
              <option value="bathroom">{{ $t('forms.orderMaintenance.options.room.bathroom') }}</option>
              <option value="bedroom">{{ $t('forms.orderMaintenance.options.room.bedroom') }}</option>
              <option value="other">{{ $t('forms.orderMaintenance.options.room.other') }}</option>
            </select>
          </div>

          <!-- التاريخ والوقت -->
          <div class="grid gap-4 md:col-span-2 md:grid-cols-2">
            <div class="space-y-2">
              <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">{{ $t('forms.orderMaintenance.fields.visitDate') }}</label>
              <input
                v-model="form.visitDate"
                type="date"
                class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
              />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">{{ $t('forms.orderMaintenance.fields.visitTime') }}</label>
              <select
                v-model="form.visitTime"
                class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
              >
                <option value="morning">{{ $t('forms.orderMaintenance.options.visitTime.morning') }}</option>
                <option value="evening">{{ $t('forms.orderMaintenance.options.visitTime.evening') }}</option>
              </select>
            </div>
          </div>

          <!-- ملاحظات -->
          <div class="space-y-2 md:col-span-2">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">{{ $t('forms.orderMaintenance.fields.notes') }}</label>
            <textarea
              v-model="form.notes"
              rows="3"
              class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
            ></textarea>
          </div>
        </div>

        <!-- زر الإرسال -->
        <div class="mt-8 flex justify-end">
          <button
            type="submit"
            class="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-700"
          >
            {{ $t('forms.orderMaintenance.submit') }}
          </button>
        </div>
      </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface MaintenanceForm {
  fullName: string;
  phone: string;
  email: string;
  apartmentNumber: string;
  maintenanceType: string;
  problemDescription: string;
  priority: string;
  room: string;
  visitDate: string;
  visitTime: string;
  notes: string;
}

const form = ref<MaintenanceForm>({
  fullName: '',
  phone: '',
  email: '',
  apartmentNumber: '',
  maintenanceType: '',
  problemDescription: '',
  priority: '',
  room: '',
  visitDate: '',
  visitTime: '',
  notes: ''
});

const handleSubmit = () => {
  console.log('Form submitted:', form.value);
  // تقدر تبعت الداتا هنا بـ fetch أو axios للـ API
};
</script>
