<script setup lang="ts">
import { RouterLink } from 'vue-router'

const { to } = defineProps<{ to: string }>()
</script>

<template>
  <li class="menuItem">
    <RouterLink active-class="menuItem__link-active" class="menuItem__link" :to>
      <span class="menuItem__icon"><slot name="navIcon" /></span>
      <span><slot /></span>
    </RouterLink>
  </li>
</template>

<style scoped>
.menuItem {
  list-style: none;
  display: flex;
}

.menuItem__icon {
  transform: translateY(10px);
  height: 30px;
}

.menuItem__link {
  color: var(--color-primary);
  text-decoration: none;
  font-family: var(--font-secondary);
  font-size: 22px;
  font-weight: 400;

  display: flex;
  flex-direction: column;
  text-align: center;

  flex-shrink: 1;
  flex-grow: 0;

  opacity: 0.5;

  transition: 0.3s linear;
}

.menuItem__link-active,
.menuItem__link:hover {
  opacity: 1;
}
</style>
