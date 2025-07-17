<script setup lang="ts">
import InputDefault from '@/components/InputDefault.vue'
import { useAuthStore } from '@/stores/auth.store'
import { useRouter } from 'vue-router'

const router = useRouter()

const store = useAuthStore()

const model = defineModel<{ username: string; password: string }>({
  default: {
    username: '',
    password: '',
  },
})

function login(e: Event) {
  e.preventDefault()

  store.login({
    username: model.value.username,
    password: model.value.password,
  })

  if (store.getToken) {
    router.push({
      name: 'main',
    })
  }
}
</script>

<template>
  <div class="auth">
    <div class="auth__form">
      <form>
        <InputDefault v-model="model.username" placeholder="Имя"></InputDefault>
        <InputDefault v-model="model.password" placeholder="Пароль" type="password"></InputDefault>
        <button @click="login" type="submit">Вход</button>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
