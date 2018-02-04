import _ from 'lodash';

const initialState = {};

const  youniversity = (state = initialState, action) => {
    
    const newState = _.merge({}, state);

    switch (action.type) {
        
        default:
            return newState;
        }
}

export default youniversity