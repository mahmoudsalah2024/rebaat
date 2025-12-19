<template>
    <MainLayout>
      <p class="text-xl font-bold pb-4">طلب صيانة</p>
      <div>
          <form @submit.prevent="handleSubmit" class="bg-white rounded-lg">
            <!-- الاسم -->
            <div class="mb-4">
              <label class="block mb-2 text-sm font-medium text-gray-700">الاسم بالكامل</label>
              <input v-model="form.fullName" type="text" class="w-full p-2 border rounded-lg" required />
            </div>
        
            <!-- الهاتف -->
            <div class="mb-4">
              <label class="block mb-2 text-sm font-medium text-gray-700">رقم الهاتف</label>
              <input v-model="form.phone" type="tel" class="w-full p-2 border rounded-lg" required />
            </div>
        
            <!-- البريد -->
            <div class="mb-4">
              <label class="block mb-2 text-sm font-medium text-gray-700">البريد الإلكتروني</label>
              <input v-model="form.email" type="email" class="w-full p-2 border rounded-lg" />
            </div>
        
            <!-- تفاصيل العقار -->
            <div class="mb-4">
                <label class="block mb-2 text-sm font-medium text-gray-700">رقم الشقة</label>
                <input v-model="form.apartmentNumber" type="text" class="w-full p-2 border rounded-lg" />
            </div>
        
            <!-- نوع الصيانة -->
            <div class="mb-4">
              <label class="block mb-2 text-sm font-medium text-gray-700">نوع الصيانة</label>
              <select v-model="form.maintenanceType" class="w-full p-2 border rounded-lg">
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
            <div class="mb-4">
              <label class="block mb-2 text-sm font-medium text-gray-700">الوصف</label>
              <textarea v-model="form.problemDescription" rows="4" class="w-full p-2 border rounded-lg"></textarea>
            </div>
        
            <!-- الأولوية -->
            <div class="mb-4">
              <label class="block mb-2 text-sm font-medium text-gray-700">الأولوية</label>
              <select v-model="form.priority" class="w-full p-2 border rounded-lg">
                <option value="عادي">عادي</option>
                <option value="عاجل">عاجل</option>
                <option value="طارئ">طارئ</option>
              </select>
            </div>
        
            <!-- الغرفة -->
            <div class="mb-4">
              <label class="block mb-2 text-sm font-medium text-gray-700">المكان</label>
              <select v-model="form.room" class="w-full p-2 border rounded-lg">
                <option value="غرفة المعيشة">غرفة المعيشة</option>
                <option value="المطبخ">المطبخ</option>
                <option value="الحمام">الحمام</option>
                <option value="غرفة النوم">غرفة النوم</option>
                <option value="أخرى">أخرى</option>
              </select>
            </div>
        
            <!-- التاريخ والوقت -->
            <div class="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-700">تاريخ الزيارة</label>
                <input v-model="form.visitDate" type="date" class="w-full p-2 border rounded-lg" />
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-700">وقت الزيارة</label>
                <select v-model="form.visitTime" class="w-full p-2 border rounded-lg">
                  <option value="صباحاً">صباحاً</option>
                  <option value="مساءً">مساءً</option>
                </select>
              </div>
            </div>
        
            <!-- ملاحظات -->
            <div class="mb-4">
              <label class="block mb-2 text-sm font-medium text-gray-700">ملاحظات إضافية</label>
              <textarea v-model="form.notes" rows="3" class="w-full p-2 border rounded-lg"></textarea>
            </div>
        
            <!-- زر الإرسال -->
            <button type="submit" class="w-full py-2 px-4 bg-blue-600! text-white rounded-lg hover:bg-blue-700">
              إرسال الطلب
            </button>
          </form>
      </div>
    </MainLayout>
</template>

<script setup lang="ts">
import {ref} from 'vue'
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