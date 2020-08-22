import { loginByEmailAndPassword } from '../services/user.service'

const state = () => {
    return {
        _id: '',
        name: '',
        email: '',
        password: '',
        token: '',
    }
}

const mutations = {
    setUserData (state, userData) {
        const { _id, name, email } = userData
        state._id = _id
        state.name = name
        state.email = email
    },
    setToken (state, token) {
        state.token = token
    },
    setPassword (state, password) {
        state.password = password
    },
}

const actions = {
    async login ({ commit }, { email, password }) {
        const loginData = await loginByEmailAndPassword(email, password).catch(error => {
            throw error.message
        })

        commit('setToken', loginData.token)
        commit('setUserData', loginData)
    },
    async refreshLogin ({ state, dispatch }) {
        // Waiting refresh token backend implementation
        await dispatch('login', {
            email: state.email,
            password: state.password,
        })
    },
}

export default {
    state,
    mutations,
    actions,
    namespaced: true,
}