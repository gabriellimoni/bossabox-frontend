import { getTools, deleteToolById } from '../services/tool.service'

const state = () => {
    return {
        tools: [],
    }
}

const mutations = {
    addTool (state, tool) {
        state.tools.push(tool)
    },
    removeToolById (state, toolId) {
        console.log(toolId)
        state.tools = state.tools.filter(tool => {
            return tool._id != toolId
        })
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
    async deleteTool ({ commit }, toolId) {
        await deleteToolById(toolId).catch(error => {
            throw error.message
        })
        commit('removeToolById', toolId)
    }
}

export default {
    state,
    mutations,
    actions,
    namespaced: true,
}