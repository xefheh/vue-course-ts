<script setup lang="ts">
import type Meditation from '@/interfaces/meditations'
import AppButton from '../AppButton.vue'
import AppButtonIcon from '@/icons/AppButtonIcon.vue'

const { title, description, durationMin } = defineProps<Meditation>()
</script>

<template>
  <div class="meditation">
    <h1 class="title">{{ title }}</h1>
    <p class="description">{{ description }}</p>
    <div class="itemFooter">
      <AppButton
        class="meditationBtn"
        bg-color-param="color-bg"
        bg-hover-color-param="color-bg-inverted"
        text-color-param="color-primary"
        >Начать <template #icon><AppButtonIcon></AppButtonIcon></template
      ></AppButton>
      <p class="duration">{{ durationMin }} мин</p>
    </div>
  </div>
</template>

<style scoped>
.meditationBtn {
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: 10px;
}

.title,
.description,
.duration {
  padding: 0;
  margin: 0;
}

.title {
  font-size: 25px;
  font-weight: 500;
}

.description {
  font-family: var(--font-secondary);
  font-size: 15px;
  font-weight: 500;
}

.duration {
  font-family: var(--font-secondary);
  font-weight: 500;
  color: var(--color-bg);
  opacity: 75%;
  margin: 0 0 0 auto;
}

.meditation {
  display: flex;
  flex-direction: column;

  min-width: 250px;
  max-width: 250px;
  min-height: 110px;
  max-height: 110px;

  border-radius: 20px;

  padding: 25px 30px;

  background: var(--color-bg-meditation);
}

.itemFooter {
  display: flex;
  align-items: center;
  justify-self: flex-end;
  margin: auto 0 0 0;
  padding: 0 5px;
}
</style>
