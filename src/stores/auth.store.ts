import { API_ROUTES, client } from '@/api'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const AUTH_TOKEN = 'auth-token'

interface LoginResponse {
  data: {
    token: string
  }
}

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string>()
  const initToken = () => {
    token.value =
      localStorage.getItem(AUTH_TOKEN) == null
        ? undefined
        : (localStorage.getItem(AUTH_TOKEN) as string)
  }

  initToken()

  const getToken = computed(() => {
    return token.value
  })

  const setToken = (newToken: string) => {
    token.value = newToken
    localStorage.setItem(AUTH_TOKEN, newToken)
  }

  const login = async ({ username, password }: { username: string; password: string }) => {
    const { data } = await client().post<LoginResponse>(API_ROUTES.AUTH_ROUTES.AUTH_ROUTE, {
      username: username,
      password: password,
    })
    setToken(data.data.token)
  }

  const register = async ({
    email,
    username,
    password,
  }: {
    email: string
    username: string
    password: string
  }) => {
    await client().post(API_ROUTES.AUTH_ROUTES.REGISTER_ROUTE, {
      email: email,
      username: username,
      password: password,
    })
  }

  const clearToken = () => {
    token.value = undefined
    localStorage.removeItem(AUTH_TOKEN)
  }

  return { getToken, login, register, clearToken }
})
