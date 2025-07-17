<script setup lang="ts">
const data = defineModel()

const { placeholder, type = 'text' } = defineProps<{ placeholder: string; type?: string }>()
</script>

<template>
  <input class="inputString" v-model="data" :placeholder="placeholder" :type="type" />
</template>

<style scoped></style>
