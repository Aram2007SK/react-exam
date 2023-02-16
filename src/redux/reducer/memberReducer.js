import { membersType } from "../types/types"
import { initialState } from "./authReducer"

const memberReducer = (state = initialState, action) => {
    switch (action.type) {  
        case membersType.SET_MEMBERS_LIST: {
            return {
                ...state,
                membersList: action.payload
            }
        }
        case membersType.ADD_MEMBER: {
            return {
                ...state,
                membersList: action.payload
            }
        }
        default: return state
    }
}

export default memberReducer