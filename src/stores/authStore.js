import { ref } from 'vue'
import { defineStore } from 'pinia'
import { signin } from '../services/auth/signin.js'
import { signup } from '../services/auth/signup.js'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(null)
  const isAuthenticated = ref(false)

  const setToken = (value) => token.value = value
  const setIsAuthenticated = (value) => {
    isAuthenticated.value = value
    console.log('usuario autenticado')
  }

  const login = async (data) => {
    const { data: user } = await signin(data)
    localStorage.setItem('token', user.access_token)
    setToken(user.access_token)
    setIsAuthenticated(true)
  }

  const register = (data) => signup(data)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
  }

  return {
    // state
    token,
    isAuthenticated,

    // actions
    logout,
    login,
    register,
    setToken,
    setIsAuthenticated
  }
})
