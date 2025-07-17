import { API_ROUTES, http } from '@/api'
import type Meditation from '@/interfaces/meditations'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMeditaionStore = defineStore('meditation', () => {
  const meditations = ref<Meditation[]>()

  async function getMeditations() {
    type MeditationWithIncorrectField = Meditation & { duration_min?: number }

    const { data } = await http.get<{
      data: { meditations: MeditationWithIncorrectField[] }
    }>(API_ROUTES.GET_MEDITATIONS_URL)

    const fetchedMeditations = data.data.meditations.map((meditation) => {
      const durationMin = meditation.duration_min
      delete meditation.duration_min
      return {
        ...meditation,
        durationMin: durationMin,
      }
    }) as Meditation[]

    console.log(fetchedMeditations)

    meditations.value = fetchedMeditations
  }

  return { meditations, getMeditations }
})
