<script setup lang="ts">
import AppLogo from '@/icons/AppLogo.vue'
import MenuItem from './MenuItem.vue'
import MeditationNavIcon from '@/icons/MeditationNavIcon.vue'
import StatisticsNavIcon from '@/icons/StatisticsNavIcon.vue'
import ExitNavIcon from '@/icons/ExitNavIcon.vue'
</script>

<template>
  <header class="menu">
    <AppLogo />
    <nav class="navigation">
      <MenuItem to="/">
        <template #navIcon>
          <MeditationNavIcon />
        </template>
        Медитация</MenuItem
      >
      <div class="separator"></div>
      <MenuItem to="/statistics">
        <template #navIcon>
          <StatisticsNavIcon />
        </template>
        Статистика</MenuItem
      >
      <div class="separator"></div>
      <MenuItem to="/exit">
        <template #navIcon>
          <ExitNavIcon />
        </template>
        Выход</MenuItem
      >
    </nav>
  </header>
</template>

<style scoped>
.separator {
  background-color: var(--color-primary);
  opacity: 0.5;
  border: 1.5px solid var(--color-separator);
  height: 45%;
}

.menu {
  display: flex;

  max-height: 180px;
  min-height: 180px;

  width: 100%;

  flex-shrink: 0;
  flex-grow: 1;
}

.navigation {
  display: flex;
  align-items: center;
  margin: 0 60px 0 auto;
  gap: 25px;
}
</style>
