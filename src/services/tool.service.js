import api from './api.service'

export async function getTools () {
    const { data: toolsData } = await api.get('tools').catch(error => {
        // handle error
        throw 'Error listing'
    })
    return toolsData
}