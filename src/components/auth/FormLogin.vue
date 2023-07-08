<script setup>
import { useAuthStore } from '../../stores/authStore'
import { useForm } from '../../stores/formStore'

const { login } = useAuthStore()
const { dataFormLogin } = useForm()

const signin = () => login({ ...dataFormLogin })
</script>

<template>
  <form @submit.prevent="signin">
    <h1>Inicia sesión</h1>
    <input class="text-black" type="email" placeholder="correo" v-model="dataFormLogin.email">
    <input class="text-black" type="text" placeholder="contraseña" v-model="dataFormLogin.password">
    <button>Ingresar</button>
    <br>
    <router-link :to="{ name: 'register' }">Registrate</router-link>
  </form>
</template>