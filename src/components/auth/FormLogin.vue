<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../../stores/authStore'

const authStore = useAuthStore()

const dataForm = ref({
  email: 'randommail2@mail.com',
  password: 'strongkey1232'
})

const data = () => authStore.login({ ...dataForm.value })
</script>

<template>
  <form @submit.prevent="data">
    <h1>Inicia sesión</h1>
    <input class="text-black" type="email" placeholder="correo" v-model="dataForm.email">
    <input class="text-black" type="text" placeholder="contraseña" v-model="dataForm.password">
    <button>Ingresar</button>
  </form>
</template>