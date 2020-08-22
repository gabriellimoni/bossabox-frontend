import api from './api.service'
import errorList from '../config/errorList'

export async function getTools () {
    const { data: toolsData } = await api.get('tools').catch(error => {
        // Todo - handle error
        throw 'Error listing'
    })
    return toolsData
}

export async function createTool (tool) {
    const { data } = await api.post('tools', tool).catch(error => {
        // Todo - handle error
        throw errorList.CREATE_TOOL_ERROR
    })

    return data
}