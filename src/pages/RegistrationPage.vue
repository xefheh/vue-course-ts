<script setup lang="ts">
import InputDefault from '@/components/InputDefault.vue'
import { useAuthStore } from '@/stores/auth.store'
import { useRouter } from 'vue-router'

const router = useRouter()

const store = useAuthStore()

const model = defineModel<{ email: string; name: string; password: string }>({
  default: {
    email: '',
    name: '',
    password: '',
  },
})

function register(e: Event) {
  e.preventDefault()
  store.register({
    email: model.value.email,
    username: model.value.name,
    password: model.value.password,
  })

  router.push({
    name: 'auth',
  })
}
</script>

<template>
  <div class="auth">
    <div class="auth__form">
      <form>
        <InputDefault v-model="model.email" placeholder="Email"></InputDefault>
        <InputDefault v-model="model.name" placeholder="Имя"></InputDefault>
        <InputDefault v-model="model.password" placeholder="Пароль" type="password"></InputDefault>
        <button @click="register" type="submit">Вход</button>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
