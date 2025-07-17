<script setup lang="ts">
import Menu from '@/components/Menu/HeaderMenu.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <Menu />
  <menu>я меню....</menu>
  <main>
    <h1>ЫЫЫЫ</h1>
    <RouterView />
  </main>
  <footer>Я футер!</footer>
</template>

<style scoped></style>
