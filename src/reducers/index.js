import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import auth from './Auth'
import ui from './Ui'

const reducer = combineReducers({
    auth,
    ui,
    routing: routerReducer
})

export default reducer