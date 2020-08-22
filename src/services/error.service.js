import errorList from '../config/errorList'

/**
 * Responsible for logging the error 
 * and throws an error from the error list
 * @param {*} error Any possible error
 */
export async function handleError (error) {
    if (error && error.response && error.response.data) {
        const errorData = error.response.data
        logError(errorData)

        const errorFromList = Object.values(errorList).find(
            listError => listError.code === errorData.code
        )
        if (!errorFromList) return throwUnknowErrorMessage()

        throw errorFromList
    }
    
    return throwUnknowErrorMessage()
}

async function throwUnknowErrorMessage () {
    logError(error)
    throw errorList.UNKNOW_ERROR
}

async function logError (error) {
    // todo log error (e.g sentry)
    console.log(error)
}