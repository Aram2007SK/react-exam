import { authType } from "../types/types"

export function signIn(payload) {
    return {
        type: authType.LOGIN,
        payload
    }
}

export function authLogin() {
    return {
        type: authType.AUTH_LOGIN,
    }
}

export function setCurrnetUser(payload) {
    return {
        type: authType.SET_CURRENT_USER,
        payload
    }
}

export function logOut() {
    return {
        type: authType.LOGOUT,
    }
}

export function setError(payload){
    return{
        type:authType.SET_ERROR,
        payload
    }
}

export function setMembers(payload){
    return{
        type:authType.SET_MEMBERS_LIST,
        payload
    }
}