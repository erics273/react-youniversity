import _ from 'lodash';

import { getAuthUser } from "../services/AuthService";

const user = (state = {}, action) => {
    
    state = {authorized_user: getAuthUser() };
    
    const newState = _.merge({}, state)

    switch (action.type) {
        case "USER_REGISTERED":
            newState.registeredUser = action.result;
            return newState;
        case "USER_LOGIN_FAILED":
            newState.loginFailed = true;
            return newState;
        case "USER_UPDATED":
            newState.updatedUser = action.result;
            return newState;
        default:
            return newState;
        }
}

export default user