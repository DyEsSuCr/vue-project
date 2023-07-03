import { ref } from 'vue'
import { defineStore } from 'pinia'
import { signin } from '../services/auth/signin.js'

export const useAuthStore = defineStore('auth', () => {
  const userAuth = ref(null)

  const login = (data) => signin(data)

  const logout = () => localStorage.removeItem('token')

  return { userAuth, logout, login }
})
