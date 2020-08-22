import { createTool } from '../services/tool.service'

const state = () => {
    return {
        _id: '',
        title: '',
        link: '',
        description: '',
        tags: [],

        mode: 'creating',
    }
}

const mutations = {
    setEditingMode (state) {
        state.mode = 'editing'
    },
    setCreatingMode (state) {
        state.mode = 'creating'
    },
    setToolTitle (state, title) {
        state.title = title
    },
    setToolLink (state, link) {
        state.link = link
    },
    setToolDescription (state, description) {
        state.description = description
    },
    setToolTags (state, tags) {
        state.tags = tags
    },
    setCurrentEditingTool (state, tool) {
        state._id = tool._id || ''
        state.title = tool.title || ''
        state.link = tool.link || ''
        state.description = tool.description || ''
        state.tags = tool.tags || []
    },
    clear (state) {
        state._id = ''
        state.title = ''
        state.link = ''
        state.description = ''
        state.tags = []
        state.mode = 'creating'
    },
}

const actions = {
    async createTool ({ state, commit }) {
        const newToolData = {
            title: state.title,
            link: state.link,
            description: state.description,
            tags: state.tags,
        }
        const tool = await createTool(newToolData)
        commit('tool/addTool', tool, { root: true })
        return tool
    }
}

export default {
    state,
    mutations,
    actions,
    namespaced: true,
}