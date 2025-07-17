import type Profile from '@/interfaces/profile'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<Profile>({ name: 'Александр' })

  return { profile }
})
