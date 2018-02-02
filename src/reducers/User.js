import _ from 'lodash';

const user = (state = {}, action) => {
    console.log(state, "eric")

    // state = { errorMessage: null, successMessage: null };
    
    const newState = _.merge({}, state)

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