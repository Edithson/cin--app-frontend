import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api'

// Instance axios avec configuration par défaut
export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Intercepteur pour ajouter le token d'authentification
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('authToken')
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`
//     }
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   }
// )

// Intercepteur pour gérer les erreurs globalement
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Rediriger vers la page de login
      window.location.href = '/auth'
    }
    return Promise.reject(error)
  }
)