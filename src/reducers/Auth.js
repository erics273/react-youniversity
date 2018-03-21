/* START SOLUTION */
import _ from 'lodash';

import { getAuth } from "../services/AuthService";

const  auth = (state = {}, action) => {
    
    const newState = _.merge({}, state)

    newState.authorized_user = getAuth();

    switch (action.type) {

        case "USER_UPDATE_SUCCESS":
        case "LOGIN_SUCCESS":
            newState.authorized_user = getAuth();
            return newState;
        
        case  "LOGIN_FAIL":
            newState.authorized_user = null;
            return newState;
        
        default:
            return newState;
        }
}

export default auth
/* ELSE

//The Auth reducer is responsible for managing authentication data in the state
//It's main purpose for this project is to make sure that if we have an authorized
//user that the details are avaialble in the application state. Consider what method in our AuthService
//we can use to get our authorized users details so we can add them our state.
//Make sure you import what you need from the AuthService.

import _ from 'lodash';

const  auth = (state = {}, action) => {
    
    const newState = _.merge({}, state)

    switch (action.type) {
        
        default:
            return newState;
        }
}

export default auth

END SOLUTION */

