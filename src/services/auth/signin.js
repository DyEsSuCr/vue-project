import api from '../api.js'

export const signin = async (data) => await api.post('/login', data)