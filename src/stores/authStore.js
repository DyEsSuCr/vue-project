import { ref } from 'vue'
import { defineStore } from 'pinia'
import { signin } from '../services/auth/signin.js'
import { signup } from '../services/auth/signup.js'

export const useAuthStore = defineStore('auth', () => {
  const userAuth = ref(null)

  const login = (data) => signin(data)
  const register = (data) => signup(data)

  const logout = () => localStorage.removeItem('token')

  return { userAuth, logout, login, register }
})
