import _ from 'lodash';

const user = (state = {}, action) => {
    
    state = {currentUser: JSON.parse(localStorage.getItem("currentUser")) || {} };
    
    const newState = _.merge({}, state)

    switch (action.type) {
        case "USER_REGISTERED":
            newState.registeredUser = action.result;
            return newState;
        case "USER_UPDATED":
            newState.updatedUser = action.result;
            return newState;
        default:
            return newState;
        }
}

export default user