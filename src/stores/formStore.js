import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useForm = defineStore('formRegister', () => {
  const dataFormRegister = ref({
    telephone: '',
    verify_tc: '',
    password: '',
    password_confirmation: '',
    email: '',
    type_user_id: '',
    name: '',
    lastname: '',
    identy_document: '',
    NIT: '',
    razon_social: '',
  })

  const dataFormLogin = ref({
    password: '',
    email: ''
  })

  return {
    // state
    dataFormRegister,
    dataFormLogin,
  }
})