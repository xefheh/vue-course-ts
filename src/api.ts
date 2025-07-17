import axios from 'axios'

export const API_ROUTES = {
  GET_MEDITATIONS_URL: '/api/meditations',
}

export const http = axios.create({
  baseURL: 'http://localhost:3000',
})
