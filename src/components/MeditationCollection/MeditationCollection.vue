<script setup lang="ts">
import { useMeditaionStore } from '@/stores/meditationStore'
import { onMounted } from 'vue'
import MeditationItem from './MeditationItem.vue'
const store = useMeditaionStore()

onMounted(() => {
  store.getMeditations()
})
</script>

<template>
  <div class="meditationContainer">
    <div v-for="meditation in store.meditations" :key="meditation.id">
      <MeditationItem v-bind="meditation" />
    </div>
  </div>
</template>

<style scoped>
.meditationContainer {
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
</style>
