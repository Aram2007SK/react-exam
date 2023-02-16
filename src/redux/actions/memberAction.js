import {  membersType } from "../types/types"

export function setMembers(payload){
    return{
        type: membersType.SET_MEMBERS_LIST,
        payload
    }
}

export function addMembers(payload){
    return{
        type: membersType.ADD_MEMBER,
        payload
    }
}
