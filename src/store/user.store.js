import { loginByEmailAndPassword } from '../services/user.service'
const REFRESH_TOKEN_INTERVAL_MS = 1 * 1000 * 30 // 30 secs

const state = () => {
    return {
        _id: '',
        name: '',
        email: '',
        refreshTokenInterval: null,
    }
}

const mutations = {
    setUserData (state, userData) {
        const { _id, name, email } = userData
        state._id = _id
        state.name = name
        state.email = email
    },
}

const actions = {
    async login ({ state, commit, dispatch }, { email, password }) {
        const loginData = await loginByEmailAndPassword(email, password).catch(error => {
            throw error.message
        })

        commit('setUserData', loginData.user)
        commit('token/setTokenData', loginData.token, { root: true })
        
        clearInterval(state.refreshTokenInterval)
        state.refreshTokenInterval = setInterval(() => {
            dispatch('token/refreshToken', undefined, { root: true })
        }, REFRESH_TOKEN_INTERVAL_MS)
    },
}

export default {
    state,
    mutations,
    actions,
    namespaced: true,
}