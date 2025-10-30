import { api } from './api'

export const filmService = {
  getAll: () => api.get('/films'),
  getById: (id) => api.get(`/films/${id}`),
  create: (data) => api.post('/films', data),
  update: (id, data) => api.put(`/films/${id}`, data),
  delete: (id) => api.delete(`/films/${id}`),
}