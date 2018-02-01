import _ from 'lodash';

const user = (state = {}, action) => {
    
    state = {currentUser: JSON.parse(localStorage.getItem("authorized_user")) || {} };
    
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