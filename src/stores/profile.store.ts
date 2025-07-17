import { API_ROUTES, client } from '@/api'
import type Profile from '@/interfaces/profile'
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface ProfileResponse {
  data: {
    user: {
      username: string
    }
  }
}

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<Profile>()

  const getData = async () => {
    const { data } = await client().get<ProfileResponse>(API_ROUTES.PROFILE.GET_PROFILE)
    profile.value = {
      name: data.data.user.username,
    }
  }

  getData()

  const postStat = async (statName: string) => {
    await client().post(API_ROUTES.PROFILE.POST_STAT, {
      type: statName,
      value: 1,
    })
  }

  return { profile, postStat }
})
