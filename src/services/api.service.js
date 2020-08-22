import axios from 'axios'

const api = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
})

export async function setAuthToken (token) {
    api.defaults.headers['x-access-token'] = token
}

export default api