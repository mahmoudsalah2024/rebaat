<template>
    <MainLayout>
        <div class="flex flex-col">
            <section>
                <div class="flex flex-wrap justify-between">
                    <p class="text-xl font-bold">صندوق البيت</p>
                    <router-link to="/money_box"
                        class=" focus:outline-none p-2 hover:rounded-sm hover:bg-indigo-600 hover:text-white text-sm border-b">
                        <p>اطلع على التفاصيل</p>
                    </router-link>
                </div>
                <div class="flex flex-col justify-evenly">
                    <div v-if="outcome !== income">
                        <div class="bg-gray-100 p-4 rounded-lg mt-4 text-start">
                            <p class="mt-2 text-sm">
                                رصيد
                            </p>
                            <p class="mt-2 text-4xl font-medium ">
                                {{ credit }}
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
                                    {{ income }}
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
                                    {{ outcome }}
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
                                    {{ credit }}
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
                                    {{ debited }}
                                    <span class="text-sm font-light d-none d-sm-inline-block">جنيه</span>
                                </p>
                                <span class="text-sm font-light d-sm-none">جنيه</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-2 mt-4 border rounded bg-gray-100">
                <div class="flex flex-wrap justify-start ps-5">
                    <p class="text-xl font-bold">تنبيهات</p>
                </div>
                <div class="flex justify-start gap-2 px-5">
                    <div class="py-4 text-start">
                        <p class="mt-3 text-xl font-medium">
                            تعليق المصعد الخارجي
                        </p>
                        <p class="mt-3 text-sm text-gray-500">
                            سيتم اصلاح المصعد الخارجي بدأً من 20 يوليو
                        </p>
                        <router-link to="/maintenance/[id]"
                            class="mt-3 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                            تفاصيل
                        </router-link>
                    </div>
                </div>
            </section>
            <section class="my-4">
                <div class="flex flex-wrap justify-start">
                    <p class="text-xl font-bold">خدمات</p>
                </div>
                <div class="grid grid-cols-2 gap-2 mt-6">
                    <router-link to="/forms/orderMaintenance"
                        class="flex justify-between gap-2 bg-indigo-500  border border-indigo-300! py-4 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                        <p class="text-white">طلب صيانة</p>
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M8.4 6.763c-.251.1-.383.196-.422.235L6.564 5.584l2.737-2.737c1.113-1.113 3.053-1.097 4.337.187l1.159 1.159a1 1 0 0 1 1.39.022l4.105 4.105a1 1 0 0 1 .023 1.39l1.345 1.346a1 1 0 0 1 0 1.415l-2.052 2.052a1 1 0 0 1-1.414 0l-1.346-1.346a1 1 0 0 1-1.323.039L11.29 8.983a1 1 0 0 1 .04-1.324l-.849-.848c-.18-.18-.606-.322-1.258-.25a3.271 3.271 0 0 0-.824.202Zm1.519 3.675L3.828 16.53a1 1 0 0 0 0 1.414l2.736 2.737a1 1 0 0 0 1.414 0l6.091-6.091-4.15-4.15Z" />
                        </svg>
                    </router-link>
                    <router-link to="/forms/makeComplaint"
                        class="flex justify-between gap-2 bg-indigo-500  border border-indigo-300! py-4 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                        <p class="text-white">تقديم شكوى</p>
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M18.458 3.11A1 1 0 0 1 19 4v16a1 1 0 0 1-1.581.814L12 16.944V7.056l5.419-3.87a1 1 0 0 1 1.039-.076ZM22 12c0 1.48-.804 2.773-2 3.465v-6.93c1.196.692 2 1.984 2 3.465ZM10 8H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6V8Zm0 9H5v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3Z"
                                clip-rule="evenodd" />
                        </svg>
                    </router-link>
                    <router-link to="/maintenance"
                        class="flex justify-between gap-2 bg-indigo-500  border border-indigo-300! py-4 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                        <p class="text-white">جدول الصيانة</p>
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            viewBox="0 0 640 640">
                            <path
                                d="M598.6 118.6C611.1 106.1 611.1 85.8 598.6 73.3C586.1 60.8 565.8 60.8 553.3 73.3L361.3 265.3L326.6 230.6C322.4 226.4 316.6 224 310.6 224C298.1 224 288 234.1 288 246.6L288 275.7L396.3 384L425.4 384C437.9 384 448 373.9 448 361.4C448 355.4 445.6 349.6 441.4 345.4L406.7 310.7L598.7 118.7zM373.1 417.4L254.6 298.9C211.9 295.2 169.4 310.6 138.8 341.2L130.8 349.2C108.5 371.5 96 401.7 96 433.2C96 440 103.1 444.4 109.2 441.4L160.3 415.9C165.3 413.4 169.8 420 165.7 423.8L39.3 537.4C34.7 541.6 32 547.6 32 553.9C32 566.1 41.9 576 54.1 576L227.4 576C266.2 576 303.3 560.6 330.8 533.2C361.4 502.6 376.7 460.1 373.1 417.4z" />
                        </svg>
                    </router-link>
                    <router-link to="/clean"
                        class="flex justify-between gap-2 bg-indigo-500  border border-indigo-300! py-4 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                        <p class="text-white">جدول النظافة</p>
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                                clip-rule="evenodd" />
                        </svg>
                    </router-link>
                </div>
            </section>
            <section class="my-4">
                <div class="flex flex-wrap justify-start">
                    <p class="text-xl font-bold">أقرب مواعيد الصيانة</p>
                </div>
                <div class="grid grid-cols-2 gap-2">
                    <div class="text-start">
                        <p class="mt-3 text-xl font-medium">
                            الاثنين 22 يوليو
                        </p>
                        <p class="mt-3 text-sm text-gray-500">
                            اصلاح ماتور المياه العلوي
                        </p>
                        <router-link to="/maintenance/[id]"
                            class="mt-3 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                            تفاصيل
                        </router-link>
                    </div>
                    <div class="text-start">
                        <p class="mt-3 text-xl font-medium">
                            الاثنين 22 يوليو
                        </p>
                        <p class="mt-3 text-sm text-gray-500">
                            اصلاح ماتور المياه العلوي
                        </p>
                        <router-link to="/maintenance/[id]"
                            class="mt-3 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                            تفاصيل
                        </router-link>
                    </div>
                    <div class="text-start">
                        <p class="mt-3 text-xl font-medium">
                            الاثنين 22 يوليو
                        </p>
                        <p class="mt-3 text-sm text-gray-500">
                            اصلاح ماتور المياه العلوي
                        </p>
                        <router-link to="/maintenance/[id].vue"
                            class="mt-3 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                            تفاصيل
                        </router-link>
                    </div>
                    <div class="text-start">
                        <p class="mt-3 text-xl font-medium">
                            الاثنين 22 يوليو
                        </p>
                        <p class="mt-3 text-sm text-gray-500">
                            اصلاح ماتور المياه العلوي
                        </p>
                        <router-link to="/maintenance/[id]"
                            class="mt-3 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                            تفاصيل
                        </router-link>
                    </div>
                </div>
            </section>
        </div>
    </MainLayout>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import MainLayout from '@/layouts/MainLayout.vue';
const income = ref(25000);
const outcome = ref(30000);
const debited = ref(5000);
const credit = ref(-5000);
</script>