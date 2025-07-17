<script setup lang="ts">
import AnxiousIcon from './icons/AnxiousIcon.vue'
import CalmIcon from './icons/CalmIcon.vue'
import FocusIcon from './icons/FocusIcon.vue'
import RelaxIcon from './icons/RelaxIcon.vue'
</script>

<template>
  <div class="statePicker">
    <CalmIcon />
    <RelaxIcon />
    <FocusIcon />
    <AnxiousIcon />
  </div>
</template>

<style scoped>
.statePicker {
  margin-top: 15px;
  display: flex;
  gap: 10px;
}
</style>
