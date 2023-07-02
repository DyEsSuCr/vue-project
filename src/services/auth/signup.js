import api from '../api.js'

export const signup = async (data) => await api.post('/register', data)
