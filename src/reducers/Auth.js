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