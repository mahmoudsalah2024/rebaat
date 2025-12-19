<template>
    <MainLayout>
        <div class="p-4 max-w-6xl mx-auto" dir="rtl">
            <h2 class="text-xl font-semibold mb-4">جدول الصيانة</h2>

            <!-- الفلترة -->
            <div class="flex flex-wrap gap-2 mb-4">
                <button v-for="s in statuses" :key="s" @click="selectedStatus = s"
                    class="px-3 py-1 rounded-full text-sm font-medium border transition" :class="[
                        selectedStatus === s
                            ? 'bg-blue-600! text-white border-blue-600!'
                            : 'bg-white  border-slate-300  text-slate-700  hover:bg-slate-100 '
                    ]">
                    {{ s }}
                </button>
                <button @click="selectedStatus = ''"
                    class="px-3 py-1 rounded-full text-sm font-medium border bg-slate-50  hover:bg-slate-100 text-slate-700">
                    الكل
                </button>
            </div>

            <!-- جدول لأجهزة الكمبيوتر -->
            <div class="hidden sm:block bg-white  shadow rounded-lg overflow-x-auto">
                <table class="min-w-full text-sm text-right">
                    <thead class="bg-slate-100 ">
                        <tr class="text-slate-600">
                            <th class="px-4 py-3">التاريخ</th>
                            <th class="px-4 py-3">وقت البداية</th>
                            <th class="px-4 py-3">وقت النهاية</th>
                            <th class="px-4 py-3">النوع</th>
                            <th class="px-4 py-3">الحالة</th>
                            <th class="px-4 py-3">المسؤول</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 ">
                        <tr v-for="(item, i) in filteredData" :key="i"
                            class="hover:bg-slate-50 ">
                            <td class="px-4 py-3">{{ item.date }}</td>
                            <td class="px-4 py-3">{{ item.start }}</td>
                            <td class="px-4 py-3">{{ item.end }}</td>
                            <td class="px-4 py-3">{{ item.type }}</td>
                            <td class="px-4 py-3">
                                <span class="inline-block px-2 py-0.5 rounded-full text-xs font-medium"
                                    :class="statusColor(item.status as 'مجدولة' | 'مكتمل' | 'مؤجل')">
                                    {{ item.status }}
                                </span>
                            </td>
                            <td class="px-4 py-3">{{ item.responsible }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- بطاقات للموبايل -->
            <div class="block md:hidden space-y-3">
                <div v-for="(item, i) in filteredData" :key="i"
                    class="bg-white  shadow rounded-lg p-4 mb-2">
                    <div class="flex justify-between items-start">
                        <div>
                            <div class="text-sm font-medium">{{ item.date }}</div>
                            <div class="text-xs text-slate-500 ">
                                {{ item.type }} — مسؤول: {{ item.responsible }}
                            </div>
                        </div>
                        <div class="text-right">
                            <div class="text-sm">{{ item.start }} — {{ item.end }}</div>
                            <div>
                                <span class="inline-block mt-2 px-2 py-0.5 rounded-full text-xs font-medium"
                                    :class="statusColor(item.status as 'مجدولة' | 'مكتمل' | 'مؤجل')">
                                    {{ item.status }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- في حال مفيش نتائج -->
            <p v-if="filteredData.length === 0" class="text-center text-slate-500  mt-6">
                لا توجد مواعيد مطابقة
            </p>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import {ref , computed} from 'vue' ;
import MainLayout from '@/layouts/MainLayout.vue'
const data = ref([
    {
        date: "2025-10-10",
        start: "09:00",
        end: "11:30",
        type: "صيانة كهرباء",
        status: "مجدولة",
        responsible: "أحمد علي",
    },
    {
        date: "2025-10-12",
        start: "14:00",
        end: "16:00",
        type: "سباكة",
        status: "مكتمل",
        responsible: "منى حسين",
    },
    {
        date: "2025-10-15",
        start: "10:00",
        end: "12:00",
        type: "تنظيف خزان المياه",
        status: "مؤجل",
        responsible: "خالد مصطفى",
    },
])

const statuses= ["مجدولة", "مكتمل", "مؤجل"]  as string[]
const selectedStatus = ref("")

const filteredData = computed(() =>
    selectedStatus.value
        ? data.value.filter((d) => d.status === selectedStatus.value)
        : data.value
)

const statusColor = (status: "مجدولة" | "مكتمل" | "مؤجل") => {
    return {
        "مجدولة": "bg-yellow-100 text-yellow-800",
        "مكتمل": "bg-green-100 text-green-800",
        "مؤجل": "bg-red-100 text-red-800",
    }[status]
}
</script>
