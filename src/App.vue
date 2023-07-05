<script setup>
import DefaultLayaout from './layouts/defaultLayaout.vue'
import FormLogin from './components/auth/FormLogin.vue'
import FormRegister from './components/auth/FormRegister.vue'

import { onMounted } from 'vue'
import { useAuthStore } from './stores/authStore.js'

onMounted(() => {
  const token = localStorage.getItem('token')

  const { logout, setToken, setIsAuthenticated } = useAuthStore()

  if (!token) return logout()

  setToken(token)
  setIsAuthenticated(true)
})
</script>

<template>
  <DefaultLayaout>
    <FormLogin />
    <FormRegister />
  </DefaultLayaout>
</template>