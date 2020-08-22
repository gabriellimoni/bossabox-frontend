import { getTools } from '../services/tool.service'

const state = () => {
    return {
        tools: [],
    }
}

const mutations = {
    addTool (state, tool) {
        state.tools.push(tool)
    },
    clear (state) {
        state.tools = []
    }
}

const actions = {
    async loadAllTools ({ commit }) {
        commit('clear')
        const toolsData = await getTools().catch(error => {
            throw error.message
        })
        toolsData.forEach(tool => commit('addTool', tool))
    },
}

export default {
    state,
    mutations,
    actions,
    namespaced: true,
}