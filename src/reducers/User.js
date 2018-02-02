import _ from 'lodash';

const user = (state = {}, action) => {
    
    const newState = _.omit(_.merge({}, state), ["errorMessage", "successMessage"] )

    switch (action.type) {
        case "USER_UPDATED":
        case "USER_REGISTERED":
            newState.successMessage = action.successMessage;
            return newState;
        case "USER_UPDATE_FAILED":
        case "USER_REGISTRATION_FAILED":
            newState.errorMessage = action.errorMessage;
            return newState;
        default:
            return newState;
        }
}

export default user