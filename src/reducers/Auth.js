import _ from 'lodash';

import { getAuthUser } from "../services/AuthService";

const auth = (state = {}, action) => {
    
    state = {authorized_user: getAuthUser() };
    
    const newState = _.merge({}, state)

    switch (action.type) {
        case "USER_LOGIN_FAILED":
            newState.errorMessage = action.errorMessage;
            return newState;
        case "USER_LOGOUT":
            newState.successMessage = action.successMessage;
            return newState;
        default:
            return newState;
        }
}

export default auth