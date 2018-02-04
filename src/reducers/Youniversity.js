import _ from 'lodash';

import { getAuth } from "../services/AuthService";

const initialState = {};

const  youniversity = (state = initialState, action) => {
    
    state.authorized_user = getAuth();
    state.errorMessage = action.errorMessage;
    state.successMessage = action.successMessage;
    
    const newState = _.omit(_.merge({}, state) )

    switch (action.type) {
        
        default:
            return newState;
        }
}

export default youniversity