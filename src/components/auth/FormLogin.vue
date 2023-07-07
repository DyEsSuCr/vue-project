<script setup>
import { useAuthStore } from '../../stores/authStore'
import { useFormRegister } from '../../stores/formRegisterStore'

const { login } = useAuthStore()
const { dataForm } = useFormRegister()

const signin = () => login({ ...dataForm })
</script>

<template>
  <form @submit.prevent="signin">
    <h1>Inicia sesión</h1>
    <input class="text-black" type="email" placeholder="correo" v-model="dataForm.email">
    <input class="text-black" type="text" placeholder="contraseña" v-model="dataForm.password">
    <button>Ingresar</button>
    <br>
    <router-link :to="{ name: 'register' }">Registrate</router-link>
  </form>
</template>