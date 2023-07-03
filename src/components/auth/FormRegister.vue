<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../../stores/authStore'

const authStore = useAuthStore()

const dataForm = ref({
  telephone: "90909090",
  NIT: "90909090",
  razon_social: "usernamerandom100",
  type_user_id: 1,
  verify_tc: 1,
  password: "strongkey1235",
  password_confirmation: "strongkey1235",
  email: "usernamerandom100@mail.com"
})

const data = () => authStore.register({ ...dataForm.value })
</script>

<template>
  <form @submit.prevent="data">
    <h1>Registrate</h1>
    <input class="text-black" type="email" placeholder="correo" v-model="dataForm.email">
    <input class="text-black" type="text" placeholder="contraseña" v-model="dataForm.password">
    <button>Registrarse</button>
  </form>
</template>