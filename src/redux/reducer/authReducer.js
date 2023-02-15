import { authType } from "../types/types";

const initialState = {
    membersList:[],
    currentUser:null,
    error:''
}

const authReducer = (state = initialState, action)=>{
    switch (action.type) {
        case authType.SET_CURRENT_USER:
            return {
                ...state,
                currentUser:action.payload
            }
        ;
        case authType.SET_ERROR:{
            return {
                ...state,
                error:action.payload
            }
        }
        case authType.SET_MEMBERS_LIST:{
            return {
                ...state,
                membersList:action.payload
            }
        }
        default:return state
    }
}

export default authReducer;