import api from '../../interceptors/api.js'

export const signup = async (data) => await api.post('/register', data)
