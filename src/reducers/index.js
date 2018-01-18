import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import user from './User'

const reducer = combineReducers({
    user,
    routing: routerReducer
})

export default reducer