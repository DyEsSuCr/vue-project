import api from '../../interceptors/api.js'

export const signin = async (data) => await api.post('/login', data)