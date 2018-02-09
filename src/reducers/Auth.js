/* START SOLUTION */
import _ from 'lodash';

import { getAuth } from "../services/AuthService";

const  auth = (state = {}, action) => {
    
    state.authorized_user = getAuth();
    
    const newState = _.merge({}, state)

    switch (action.type) {
        
        default:
            return newState;
        }
}

export default auth
/* ELSE

//The Auth reducer is responsible for managing authentication data in the state
//It's main purpose for this project is to make sure that if we have an authorized
//user that the details are avaialble in the application state.

END SOLUTION */
