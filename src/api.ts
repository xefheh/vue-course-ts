import axios from 'axios'
import { useAuthStore } from './stores/auth.store'

export const API_ROUTES = {
  GET_MEDITATIONS_URL: '/api/meditations',
  AUTH_ROUTES: {
    AUTH_ROUTE: '/api/auth/login',
    REGISTER_ROUTE: '/api/auth/register',
  },
  PROFILE: {
    GET_PROFILE: '/api/profile',
    POST_STAT: '/api/stats',
  },
}

export const client = () => {
  const store = useAuthStore()
  const token = store.getToken

  return axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
