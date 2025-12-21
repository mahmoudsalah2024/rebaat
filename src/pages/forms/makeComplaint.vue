<template>
  <MainLayout>
    <div class="space-y-6" dir="rtl">
      <section class="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p class="text-sm font-semibold text-emerald-600 dark:text-emerald-300">خدمة سريعة</p>
            <h1 class="mt-2 text-2xl font-bold">تقديم شكوى</h1>
          </div>
        </div>
      </section>

      <form @submit.prevent="handleSubmit" class="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div class="grid gap-6 md:grid-cols-2">
          <!-- الاسم -->
          <div class="space-y-2">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">الاسم بالكامل</label>
            <input v-model="form.fullName" type="text" class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200" required />
          </div>

          <!-- الهاتف -->
          <div class="space-y-2">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">رقم الهاتف</label>
            <input v-model="form.phone" type="tel" class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200" required />
          </div>

          <!-- البريد -->
          <div class="space-y-2">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">البريد الإلكتروني</label>
            <input v-model="form.email" type="email" class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200" />
          </div>

          <!-- تفاصيل العقار -->
          <div class="space-y-2">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">رقم الشقة</label>
            <input v-model="form.apartmentNumber" type="text" class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200" />
          </div>

          <!-- نوع المشكلة -->
          <div class="space-y-2">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">نوع المشكلة</label>
            <select v-model="form.complaintType" class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
              <option value="">اختر النوع</option>
              <option value="ساكن">ساكن</option>
              <option value="عامل">عامل</option>
              <option value="عامل من الخارج">عامل من الخارج</option>
              <option value="مُحصل">مُحصل</option>
              <option value="أخرى">أخرى</option>
            </select>
          </div>

          <!-- وصف المشكلة -->
          <div class="space-y-2 md:col-span-2">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">الوصف</label>
            <textarea v-model="form.problemDescription" rows="4" class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"></textarea>
          </div>

          <!-- التاريخ والوقت -->
          <div class="grid gap-4 md:col-span-2 md:grid-cols-2">
            <div class="space-y-2">
              <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">تاريخ حدوث المشكلة</label>
              <input v-model="form.complaintDate" type="date" class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200" />
            </div>
                        <div class="space-y-2">
              <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">وقت حدوث المشكلة</label>
              <input v-model="form.complaintTime" type="time" class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200" />
            </div>
                      </div>

          <!-- ملاحظات -->
          <div class="space-y-2 md:col-span-2">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">ملاحظات إضافية</label>
            <textarea v-model="form.notes" rows="3" class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"></textarea>
          </div>
        </div>

        <!-- زر الإرسال -->
        <div class="mt-8 flex justify-end">
          <button type="submit" class="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-700">
            إرسال المشكلة
                      </button>
        </div>
      </form>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'
interface ComplaintForm {
  fullName: string
  phone: string
  email: string
  apartmentNumber: string
  complaintType: string
  problemDescription: string
  complaintDate: string
  complaintTime: string
  notes: string
}

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
})

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
  // تقدر تبعت الداتا هنا بـ fetch أو axios للـ API
}
</script>