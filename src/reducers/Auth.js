import _ from 'lodash';

import { getAuth } from "../services/AuthService";

const auth = (state = {}, action) => {
    
    state.authorized_user = getAuth();
    
    const newState = _.omit(_.merge({}, state), ["errorMessage", "successMessage"] )

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