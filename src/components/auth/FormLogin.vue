<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../../stores/authStore'

const { login } = useAuthStore()

const dataForm = ref({
  email: 'usernamerandom100@mail.com',
  password: 'strongkey1235'
})

const data = () => login({ ...dataForm.value })
</script>

<template>
  <form @submit.prevent="data">
    <h1>Inicia sesión</h1>
    <input class="text-black" type="email" placeholder="correo" v-model="dataForm.email">
    <input class="text-black" type="text" placeholder="contraseña" v-model="dataForm.password">
    <button>Ingresar</button>
  </form>
</template>