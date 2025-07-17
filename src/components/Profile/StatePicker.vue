<script setup lang="ts">
import { useProfileStore } from '@/stores/profile.store'
import AnxiousIcon from './icons/AnxiousIcon.vue'
import CalmIcon from './icons/CalmIcon.vue'
import FocusIcon from './icons/FocusIcon.vue'
import RelaxIcon from './icons/RelaxIcon.vue'

const store = useProfileStore()

const saveStat = (name: string) => {
  store.postStat(name)
}
</script>

<template>
  <div class="statePicker" @click="() => saveStat('feeling_calm')">
    <span class="picker">
      <CalmIcon />
    </span>
    <span class="picker" @click="() => saveStat('feeling_relax')">
      <RelaxIcon />
    </span>
    <span class="picker" @click="() => saveStat('feeling_focus')">
      <FocusIcon />
    </span>
    <span class="picker" @click="() => saveStat('feeling_anxiety')">
      <AnxiousIcon />
    </span>
  </div>
</template>

<style scoped>
.statePicker {
  margin-top: 15px;
  display: flex;
  gap: 10px;
}

.picker {
  cursor: pointer;
}

.picker:hover {
  background-color: blue;
}
</style>
