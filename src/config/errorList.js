// todo fill all possible errors with code and message (check swagger)
export default {
    USER_NOT_AUTHORIZED: {
        code: 'auth/not_authorized',
        message: 'Email ou senha inválidos',
    },
    USER_NOT_AUTHORIZED: {
        code: 'auth/token_not_sent',
        message: 'Não autorizado',
    },
    USER_NOT_FOUND: {
        message: 'Email não encontrado',
    },
    CREATE_TOOL_ERROR: {
        message: 'Erro ao criar ferramenta'
    },
    DELETE_TOOL_ERROR: {
        message: 'Erro ao deletar ferramenta'
    },
    LIST_TOOL_ERROR: {
        message: 'Erro ao listar ferramentas'
    },

    UNKNOW_ERROR: {
        message: 'Erro desconhecido',
    },
}