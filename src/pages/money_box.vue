<template>
    <MainLayout>
        <div class="p-3 max-w-6xl mx-auto bg-white  rounded-lg" dir="rtl">
            <p class="text-xl font-bold pb-1">صندوق البيت</p>
            <section class="mb-4">
                <div class="flex flex-col justify-evenly">
                    <div v-if="outcome !== income">
                        <div class="bg-gray-100 p-4 rounded-lg mt-4 text-start">
                            <p class="mt-2 text-sm">
                                رصيد
                            </p>
                            <p class="mt-2 text-4xl font-medium ">
                                {{credit}}
                                <span class="text-sm font-light">جنيه</span>
                            </p>
                        </div>
                    </div>
                    <div class="flex justify-evenly gap-2">
                        <div class="w-1/2">
                            <div class="bg-green-100 p-4 rounded-lg mt-2 text-start">
                                <p class="mt-2 text-sm">
                                    الأيرادات
                                </p>
                                <p class="mt-2 text-xl font-medium">
                                    {{income}}
                                    <span class="text-sm font-light d-none d-sm-inline-block">جنيه</span>
                                </p>
                                <span class="text-sm font-light d-sm-none">جنيه</span>
                            </div>
                        </div>
                        <div class="w-1/2">
                            <div class="bg-red-100 p-4 rounded-lg mt-2 text-start">
                                <p class="mt-2 text-sm">
                                    المصروفات
                                </p>
                                <p class="mt-2 text-xl font-medium">
                                    {{outcome}}
                                    <span class="text-sm font-light d-none d-sm-inline-block">جنيه</span>
                                </p>
                                <span class="text-sm font-light d-sm-none">جنيه</span>
                            </div>
                        </div>
                        <div v-if="outcome === income" class="w-1/2">
                            <div class="bg-gray-100 p-4 rounded-lg mt-2 text-start">
                                <p class="mt-2 text-sm">
                                    رصيد
                                </p>
                                <p class="mt-2 text-xl font-medium ">
                                    {{credit}}
                                    <span class="text-sm font-light d-none d-sm-inline-block">جنيه</span>
                                </p>
                                <span class="text-sm font-light d-sm-none">جنيه</span>
                            </div>
                        </div>
                        <div v-if="outcome !== income" class="w-1/2">
                            <div class="bg-gray-100 p-4 rounded-lg mt-2 text-start">
                                <p class="mt-2 text-sm">
                                    مديونية
                                </p>
                                <p class="mt-2 text-xl font-medium ">
                                    {{debited}}
                                    <span class="text-sm font-light d-none d-sm-inline-block">جنيه</span>
                                </p>
                                <span class="text-sm font-light d-sm-none">جنيه</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div style="z-index: 0 !important;">
                <v-tabs color="primary" v-model="tab" class="mb-2">
                    <v-tab value="one">الأيرادات</v-tab>
                    <v-tab value="two">المصروفات</v-tab>
                    <v-tab value="three">المديونية</v-tab>
                </v-tabs>
                <v-tabs-window v-model="tab">
                    <v-tabs-window-item value="one">
                        <table class="w-full border-collapse">
                            <thead>
                                <tr class="bg-indigo-500 dark:bg-indigo-700">
                                    <th
                                        class="border border-slate-300 dark:border-gray-600 p-2 text-white dark:text-slate-200">
                                        الرقم</th>
                                    <th
                                        class="border border-slate-300 dark:border-gray-600 p-2 text-white dark:text-slate-200">
                                        البند</th>
                                    <th
                                        class="border border-slate-300 dark:border-gray-600 p-2 text-white dark:text-slate-200">
                                        الأيرادات</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(invoice, i) in paginatedInvoices" :key="i">
                                    <td class="border border-slate-300 dark:border-gray-600 p-2">{{ (currentPage - 1) *
                                        pageSize
                                        + i + 1 }}</td>
                                        <td class="border border-slate-300 dark:border-gray-600 p-2" v-for="(type,index) in types" :key="index">{{type}}</td>
                                    <td class="border border-slate-300 dark:border-gray-600 p-2">{{ invoice.income }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="flex justify-center gap-4 mt-4">
                            <button @click="currentPage--" :disabled="currentPage === 1"
                                :class="{ 'bg-indigo-100! opacity-50 cursor-not-allowed': currentPage === 1, 'bg-indigo-500!': currentPage !== 1 }"
                                class="px-4 py-2 dark:bg-indigo-700 text-white rounded-lg">السابق</button>
                            <button @click="currentPage++" :disabled="currentPage >= Math.ceil(invoices.length / pageSize)"
                                :class="{ 'bg-indigo-100! opacity-50 cursor-not-allowed': currentPage >= Math.ceil(invoices.length / pageSize), 'bg-indigo-500!': currentPage < Math.ceil(invoices.length / pageSize) }"
                                class="px-4 py-2 bg-indigo-500! dark:bg-indigo-700 text-white rounded-lg">التالي</button>
                        </div>
                    </v-tabs-window-item>
                    <v-tabs-window-item value="two">
                        <table class="w-full border-collapse">
                            <thead>
                                <tr class="bg-indigo-500 dark:bg-indigo-700">
                                    <th
                                        class="border border-slate-300 dark:border-gray-600 p-2 text-white dark:text-slate-200">
                                        الرقم</th>
                                    <th
                                        class="border border-slate-300 dark:border-gray-600 p-2 text-white dark:text-slate-200">
                                        المصروفات</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(invoice, i) in paginatedInvoices" :key="i">
                                    <td class="border border-slate-300 dark:border-gray-600 p-2">{{ (currentPage - 1) *
                                        pageSize
                                        + i + 1 }}</td>
                                    <td class="border border-slate-300 dark:border-gray-600 p-2">{{ invoice.outcome }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="flex justify-center gap-4 mt-4">
                            <button @click="currentPage--" :disabled="currentPage === 1"
                                :class="{ 'bg-indigo-100! opacity-50 cursor-not-allowed': currentPage === 1, 'bg-indigo-500!': currentPage !== 1 }"
                                class="px-4 py-2 dark:bg-indigo-700 text-white rounded-lg">السابق</button>
                            <button @click="currentPage++" :disabled="currentPage >= Math.ceil(invoices.length / pageSize)"
                                :class="{ 'bg-indigo-100! opacity-50 cursor-not-allowed': currentPage >= Math.ceil(invoices.length / pageSize), 'bg-indigo-500!': currentPage < Math.ceil(invoices.length / pageSize) }"
                                class="px-4 py-2 bg-indigo-500! dark:bg-indigo-700 text-white rounded-lg">التالي</button>
                        </div>
                    </v-tabs-window-item>
                    <v-tabs-window-item value="three">
                        <table class="w-full border-collapse">
                            <thead>
                                <tr class="bg-indigo-500 dark:bg-indigo-700">
                                    <th
                                        class="border border-slate-300 dark:border-gray-600 p-2 text-white dark:text-slate-200">
                                        الرقم</th>
                                    <th
                                        class="border border-slate-300 dark:border-gray-600 p-2 text-white dark:text-slate-200">
                                        المديونية</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(invoice, i) in paginatedInvoices" :key="i">
                                    <td class="border border-slate-300 dark:border-gray-600 p-2">
                                        {{ (currentPage - 1) * pageSize + i + 1 }}</td>
                                    <td class="border border-slate-300 dark:border-gray-600 p-2">{{ invoice.income }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="flex justify-center gap-4 mt-4">
                            <button @click="currentPage--" :disabled="currentPage === 1"
                                :class="{ 'bg-indigo-100! opacity-50 cursor-not-allowed': currentPage === 1, 'bg-indigo-500!': currentPage !== 1 }"
                                class="px-4 py-2 dark:bg-indigo-700 text-white rounded-lg">السابق</button>
                            <button @click="currentPage++" :disabled="currentPage >= Math.ceil(invoices.length / pageSize)"
                                :class="{ 'bg-indigo-100! opacity-50 cursor-not-allowed': currentPage >= Math.ceil(invoices.length / pageSize), 'bg-indigo-500!': currentPage < Math.ceil(invoices.length / pageSize) }"
                                class="px-4 py-2 bg-indigo-500! dark:bg-indigo-700 text-white rounded-lg">التالي</button>
                        </div>
                    </v-tabs-window-item>
                </v-tabs-window>
            </div>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import {ref, computed} from 'vue'
const tab = ref('one');
const pageSize = ref(15);
const currentPage = ref(1);
const income = ref(25000);
const outcome = ref(30000);
const debited = ref(5000);
const credit = ref (-5000);
const types = ['شهرية']
const invoices = ref(
    Array.from({ length: 100 }, (_, i) => ({
        income: 1000 + i * 10,
        outcome: 500 + i * 5,
        balance: 500 + i * 5
    }))
);
const paginatedInvoices = computed(() => invoices.value.slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value));
</script>
