<script setup lang="ts">
import Menu from '@/components/Menu/HeaderMenu.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <Menu />
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
