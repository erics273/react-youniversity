import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import youniversity from './Youniversity'
import auth from './Auth'
import ui from './Ui'

const reducer = combineReducers({
    auth,
    ui,
    default: youniversity,
    routing: routerReducer
})

export default reducer