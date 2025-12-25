<template>
  <AdminLayout>
    <p>welcome in {{ id }} complaint</p>
  </AdminLayout>
</template>

<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id as string;


</script>
