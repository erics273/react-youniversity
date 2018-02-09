import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import auth from './Auth'

const reducer = combineReducers({
    auth,
    routing: routerReducer
})

export default reducer