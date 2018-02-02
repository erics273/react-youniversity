import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import auth from './Auth'
import user from './User'

const reducer = combineReducers({
    auth,
    user,
    routing: routerReducer
})

export default reducer