import { refreshToken } from '../services/user.service'

const state = () => {
    return {
        accessToken: '',
        expiresIn: 0,
        refreshToken: '',
        refreshExpiresIn: 0,
    }
}

const mutations = {
    setTokenData (state, tokenrData) {
        const { accessToken, expiresIn, refreshToken, refreshExpiresIn } = tokenrData
        state.accessToken = accessToken
        state.expiresIn = expiresIn
        state.refreshToken = refreshToken
        state.refreshExpiresIn = refreshExpiresIn
    },
}

const actions = {
    async refreshToken ({ state, commit }) {
        const refreshData = await refreshToken(state.refreshToken).catch(error => {
            throw error.message
        })

        commit('setTokenData', refreshData)
    },
}

export default {
    state,
    mutations,
    actions,
    namespaced: true,
}