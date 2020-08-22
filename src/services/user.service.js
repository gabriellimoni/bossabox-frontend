import api, { setAuthToken } from './api.service'
import errorList from '../config/errorList'

export async function loginByEmailAndPassword (email, password) {
    const { data: loginData } = await api.post('login', {
        email,
        password,
    }).catch(error => {
        if (error && error.response && error.response.data) {
            const errorData = error.response.data
            if (errorData.code === 'auth/not_authorized') throw errorList.USER_NOT_AUTHORIZED
            if (errorData.code === 'user/not_found') throw errorList.USER_NOT_FOUND
        }
        throw errorList.UNKNOW_ERROR
    })

    setAuthToken(loginData.token)
    return loginData
}

export async function refreshToken (refreshToken) {
    const { data: refreshData } = await api.post('refresh', {
        refresh_token: refreshToken,
    }).catch(error => {
        if (error && error.response && error.response.data) {
            const errorData = error.response.data
            if (errorData.code === 'auth/not_authorized') throw errorList.USER_NOT_AUTHORIZED
            if (errorData.code === 'user/not_found') throw errorList.USER_NOT_FOUND
        }
        throw errorList.UNKNOW_ERROR
    })

    setAuthToken(refreshData)
    return refreshData
}