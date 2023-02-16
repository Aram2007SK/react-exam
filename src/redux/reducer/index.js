import { combineReducers } from 'redux'
import authReducer from './authReducer'
import memberReducer from './memberReducer'
const rootReducer = combineReducers({
    authReducer,
    memberReducer
})

export default rootReducer