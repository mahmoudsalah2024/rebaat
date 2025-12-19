<template>
    <div>
        <UIHeaderTop/>
        <div>
            <div class="m-3 my-25">
                <slot />
            </div>
        </div>
        <UIHeaderBottom/>
    </div>
</template>
<script setup lang="ts">
import UIHeaderTop from '@/components/UI/header/top.vue';
import UIHeaderBottom from '@/components/UI/header/bottom.vue';
</script>
