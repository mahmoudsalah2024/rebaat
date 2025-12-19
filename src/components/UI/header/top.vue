<template>
    <div>
        <div class="fixed w-full top-0 py-3 mb-96 bg-white border-b" style="z-index: 99999 !important;">
            <div class="flex justify-between items-center px-2">
                <div class="relative w-10 h-10 ms-2 overflow-hidden bg-gray-100 rounded-full ">
                    <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>

                <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <span class="self-center text-2xl font-semibold whitespace-nowrap ">رِبـاط
                        <v-badge
                            color="warning"
                            content="تجريبي"
                            text-color="white"
                            inline
                            >
                        </v-badge>
                    </span>
                    
                </a>

                <button class="inline-flex !bg-white px-4 py-4 focus:outline-none hover:bg-indigo-600 text-lg">
                    <svg class="w-6 h-6 text-gray-800 " aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>