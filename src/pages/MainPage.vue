<script setup lang="ts">
import MeditationCollection from '@/components/MeditationCollection/MeditationCollection.vue'
import Menu from '@/components/Menu/HeaderMenu.vue'
import UserProfile from '@/components/Profile/UserProfile.vue'
</script>

<template>
  <Menu />
  <main>
    <div class="wrapper">
      <UserProfile></UserProfile>
      <MeditationCollection class="meditation" />
    </div>
  </main>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-rows: 0.5fr 0.5fr;
  grid-template-columns: minmax(100px, auto) minmax(50px, 4fr);

  max-height: calc(100vh - 200px);

  padding: 0 60px;
}

.meditation {
  margin: 0 0 0 auto;
}
</style>
