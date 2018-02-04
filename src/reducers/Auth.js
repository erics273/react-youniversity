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