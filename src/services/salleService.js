import { api } from './api'

export const salleService = {
    getAll: () => api.get('/salles'),
    getById: (id) => api.get(`/salles/${id}`),  // Correction ici
    create: (data) => api.post('/salles/create', data),
    update: (id, data) => api.put(`/salles/${id}`, data),  // Correction ici
    delete: (id) => api.delete(`/salles/${id}`),  // Correction ici
}