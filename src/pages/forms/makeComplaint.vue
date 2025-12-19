<template>
  <MainLayout>    
    <p class="text-xl font-bold pb-4">تقديم شكوى</p>
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
        
            <!-- نوع المشكلة -->
            <div class="mb-4">
            <label class="block mb-2 text-sm font-medium text-gray-700">نوع المشكلة</label>
            <select v-model="form.complaintType" class="w-full p-2 border rounded-lg">
                <option value="">اختر النوع</option>
                <option value="ساكن">ساكن</option>
                <option value="عامل">عامل</option>
                <option value="عامل من الخارج">عامل من الخارج</option>
                <option value="مُحصل">مُحصل</option>
                <option value="أخرى">أخرى</option>
            </select>
            </div>
        
            <!-- وصف المشكلة -->
            <div class="mb-4">
            <label class="block mb-2 text-sm font-medium text-gray-700">الوصف</label>
            <textarea v-model="form.problemDescription" rows="4" class="w-full p-2 border rounded-lg"></textarea>
            </div>
        
            <!-- التاريخ والوقت -->
            <div class="grid grid-cols-2 gap-4 mb-4">
            <div>
                <label class="block mb-2 text-sm font-medium text-gray-700">تاريخ حدوث المشكلة</label>
                <input v-model="form.complaintDate" type="date" class="w-full p-2 border rounded-lg" />
            </div>
            <div>
                <label class="block mb-2 text-sm font-medium text-gray-700">وقت حدوث المشكلة</label>
                <input v-model="form.complaintTime" type="time" class="w-full p-2 border rounded-lg" />
            </div>
            </div>
        
            <!-- ملاحظات -->
            <div class="mb-4">
            <label class="block mb-2 text-sm font-medium text-gray-700">ملاحظات إضافية</label>
            <textarea v-model="form.notes" rows="3" class="w-full p-2 border rounded-lg"></textarea>
            </div>
        
            <!-- زر الإرسال -->
            <button type="submit" class="w-full py-2 px-4 bg-blue-600! text-white rounded-lg hover:bg-blue-700">
            إرسال المشكلة
            </button>
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