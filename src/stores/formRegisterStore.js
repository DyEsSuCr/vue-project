import { defineStore } from 'pinia'
import { ref } from 'vue'

// usernamerandom100@mail.com
// strongkey1235

export const useFormRegister = defineStore('formRegister', () => {
  const dataForm = ref({
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

  return {
    // state
    dataForm,
  }
})