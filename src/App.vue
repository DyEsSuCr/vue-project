<script setup>
import DefaultLayaout from './layouts/defaultLayaout.vue'
import FormLogin from './components/auth/FormLogin.vue'
import FormRegister from './components/auth/FormRegister.vue'
</script>

<template>
  <DefaultLayaout>
    <FormLogin />
    <FormRegister />
  </DefaultLayaout>
</template>