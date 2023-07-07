<script setup>
import { useAuthStore } from '../../stores/authStore'
import { useFormRegister } from '../../stores/formRegisterStore'

const { register } = useAuthStore()
const { dataForm } = useFormRegister()

const signup = () => register({ ...dataForm })
</script>

<template>
  <form @submit.prevent="signup">
    <h1>Registrate</h1>
    <input class="text-black" type="email" placeholder="correo" v-model="dataForm.email">
    <input class="text-black" type="text" placeholder="contraseña" v-model="dataForm.password">
    <button>Registrarse</button>
    <br>
    <router-link :to="{ name: 'login' }">Ingresar</router-link>
  </form>
</template>