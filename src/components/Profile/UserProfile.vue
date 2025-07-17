<script setup lang="ts">
import { useProfileStore } from '@/stores/profile.store'
import StatePicker from './StatePicker.vue'

const store = useProfileStore()
</script>

<template>
  <div class="userProfile">
    <img
      class="userProfile__photo"
      src="../../assets/image.png"
      alt="Фото профиля"
      width="129px"
      height="129px"
    />
    <h1 class="welcome">Добро пожаловать, {{ store.profile.name }}!</h1>
    <p class="meeting">Как вы себя сегодня чувствуете?</p>
    <StatePicker />
  </div>
</template>

<style scoped>
.userProfile__photo {
  margin-bottom: 15px;
}

.userProfile {
  color: var(--color-primary);
}

.welcome {
  font-weight: 500;
  font-size: 30px;
  margin: 0;
}

.meeting {
  margin: 0;
  font-family: var(--font-secondary);
  opacity: 0.7;
  font-weight: 400;
  font-size: 22px;
}
</style>
