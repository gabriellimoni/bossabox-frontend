import { loginByEmailAndPassword } from '../services/user.service'

const state = () => {
    return {
        _id: '',
        name: '',
        email: '',
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
    async login ({ commit }, { email, password }) {
        const loginData = await loginByEmailAndPassword(email, password).catch(error => {
            throw error.message
        })

        commit('setUserData', loginData.user)
        commit('token/setTokenData', loginData.token, { root: true })
    },
}

export default {
    state,
    mutations,
    actions,
    namespaced: true,
}