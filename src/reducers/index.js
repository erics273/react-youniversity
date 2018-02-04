import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import youniversity from './Youniversity'
import auth from './Auth'

const reducer = combineReducers({
    auth,
    default: youniversity,
    routing: routerReducer
})

export default reducer