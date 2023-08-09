<script setup>
import { useAuthStore } from '../../stores/authStore'
import { useForm } from '../../stores/formStore'

const { register } = useAuthStore()
const { dataFormRegister } = useForm()

const signup = () => register({ ...dataFormRegister })
</script>

<template>
  <form @submit.prevent="signup">
    <h1>Registrate</h1>
    <input
      v-model="dataFormRegister.email"
      class="text-black"
      type="email"
      placeholder="correo"
    >
    <input
      v-model="dataFormRegister.password"
      class="text-black"
      type="text"
      placeholder="contraseña"
    >
    <button>Registrarse</button>
    <br>
    <router-link :to="{ name: 'login' }">
      Ingresar
    </router-link>
  </form>
</template>
