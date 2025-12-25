<template>
<router-view/>
</template>

<script setup lang="ts">
    localStorage.setItem('role', 'admin') // 'user' | 'admin'
</script>