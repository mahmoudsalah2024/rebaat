<template>
  <MainLayout>
    <div class="space-y-6" dir="rtl">
      <section
        class="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p class="text-sm font-semibold text-emerald-600 dark:text-emerald-300">خدمة سريعة</p>
            <h1 class="mt-2 text-2xl font-bold">طلب صيانة</h1>
          </div>
        </div>
      </section>

      <form @submit.prevent="handleSubmit"
        class="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div class="grid gap-6 md:grid-cols-2">
          <!-- الاسم -->
          <div class="space-y-2">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">الاسم بالكامل</label>
            <input v-model="form.fullName" type="text"
              class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
              required />
          </div>

          <!-- الهاتف -->
          <div class="space-y-2">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">رقم الهاتف</label>
            <input v-model="form.phone" type="tel"
              class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
              required />
          </div>

          <!-- البريد -->
          <div class="space-y-2">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">البريد الإلكتروني</label>
            <input v-model="form.email" type="email"
              class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200" />
          </div>

          <!-- تفاصيل العقار -->
          <div class="space-y-2">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">رقم الشقة</label>
            <input v-model="form.apartmentNumber" type="text"
              class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200" />
          </div>

          <!-- نوع الصيانة -->
          <div class="space-y-2">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">نوع الصيانة</label>
            <select v-model="form.maintenanceType"
              class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
              <option value="">اختر النوع</option>
              <option value="كهرباء">كهرباء</option>
              <option value="سباكة">سباكة</option>
              <option value="دهان">دهان</option>
              <option value="نجارة">نجارة</option>
              <option value="تكييف">تكييف</option>
              <option value="أخرى">أخرى</option>
            </select>
          </div>

          <!-- وصف المشكلة -->
          <div class="space-y-2 md:col-span-2">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">الوصف</label>
            <textarea v-model="form.problemDescription" rows="4"
              class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"></textarea>
          </div>

          <!-- الأولوية -->
          <div class="space-y-2">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">الأولوية</label>
            <select v-model="form.priority"
              class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
              <option value="عادي">عادي</option>
              <option value="عاجل">عاجل</option>
              <option value="طارئ">طارئ</option>
            </select>
          </div>

          <!-- الغرفة -->
          <div class="space-y-2">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">المكان</label>
            <select v-model="form.room"
              class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
              <option value="غرفة المعيشة">غرفة المعيشة</option>
              <option value="المطبخ">المطبخ</option>
              <option value="الحمام">الحمام</option>
              <option value="غرفة النوم">غرفة النوم</option>
              <option value="أخرى">أخرى</option>
            </select>
          </div>

          <!-- التاريخ والوقت -->
          <div class="grid gap-4 md:col-span-2 md:grid-cols-2">
            <div class="space-y-2">
              <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">تاريخ الزيارة</label>
              <input v-model="form.visitDate" type="date"
                class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">وقت الزيارة</label>
              <select v-model="form.visitTime"
                class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
                <option value="صباحاً">صباحاً</option>
                <option value="مساءً">مساءً</option>
              </select>
            </div>
          </div>

          <!-- ملاحظات -->
          <div class="space-y-2 md:col-span-2">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">ملاحظات إضافية</label>
            <textarea v-model="form.notes" rows="3"
              class="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm transition focus:border-emerald-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"></textarea>
          </div>
        </div>

        <!-- زر الإرسال -->
        <div class="mt-8 flex justify-end">
          <button type="submit"
            class="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-700">
            إرسال الطلب
          </button>
        </div>
      </form>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'

interface MaintenanceForm {
  fullName: string
  phone: string
  email: string
  apartmentNumber: string
  maintenanceType: string
  problemDescription: string
  priority: string
  room: string
  visitDate: string
  visitTime: string
  notes: string
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
})

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
  // تقدر تبعت الداتا هنا بـ fetch أو axios للـ API
}
</script>