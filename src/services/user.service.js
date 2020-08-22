import api, { setAuthToken } from './api.service'
import { handleError } from './error.service'

export async function loginByEmailAndPassword (email, password) {
    const { data: loginData } = await api.post('login', {
        email,
        password,
    }).catch(error => {
        return handleError(error)
    })

    setAuthToken(loginData.token)
    return loginData
}

export async function refreshToken (refreshToken) {
    const { data: refreshData } = await api.post('refresh', {
        refresh_token: refreshToken,
    }).catch(error => {
        return handleError(error)
    })

    setAuthToken(refreshData)
    return refreshData
}