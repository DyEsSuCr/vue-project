<script setup>
import { ref } from 'vue'
import { signin } from '../../services/auth/signin'

const dataForm = ref({
  email: '',
  password: ''
})

const data = () => {
  signin({ ...dataForm.value })
}
</script>

<template>
  <form @submit.prevent="data">
    <h1>Inicia sesión</h1>
    <input type="email" placeholder="correo" v-model="dataForm.email">
    <input type="text" placeholder="contraseña" v-model="dataForm.password">
    <button>Ingresar</button>
  </form>
</template>