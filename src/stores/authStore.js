import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const auth = ref(null)

  const logout = () => localStorage.removeItem('token')

  return { auth, logout }
})
