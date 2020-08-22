import axios from 'axios'

const api = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
})

export async function setAuthToken (tokenData) {
    api.defaults.headers['x-access-token'] = tokenData.accessToken
}

export default api