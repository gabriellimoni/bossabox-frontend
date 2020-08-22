import api from './api.service'
import { handleError } from './error.service'

export async function getTools () {
    const { data: toolsData } = await api.get('tools').catch(error => {
        return handleError(error)
    })
    return toolsData
}

export async function createTool (tool) {
    const { data } = await api.post('tools', tool).catch(error => {
        return handleError(error)
    })

    return data
}

export async function deleteToolById (toolId) {
    await api.delete(`tools/${toolId}`).catch(error => {
        return handleError(error)
    })

    return true
}