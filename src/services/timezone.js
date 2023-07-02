import axios from 'axios'
const baseURL = import.meta.env.VITE_BASE_URL_API

const getTimezone = async () => await axios.get(`${baseURL}/timezone`)

export default getTimezone