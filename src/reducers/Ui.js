/* START SOLUTION */
import _ from 'lodash';

const  ui = (state = {}, action) => {

    state.flashMessage = "";
    state.flashType = state.flashType || "";
    state.showFlash = false;

    if(action.result){
        state.flashMessage = action.result.message
        state.flashType = action.result.type;
        state.showFlash = !!(action.result.message) 
    }
    
    const newState = _.merge({}, state)

    switch (action.type) {
        
        default:
            return newState;
        }
}

export default ui
/* ELSE

//The UI reducer is responsible for managing UI data in the state
//It's main purpose for this project is to make sure that if we have message
//attached to the result of an action that the information about the result
//is avaialble in the application state so we can display the flash message.

import _ from 'lodash';

const  ui = (state = {}, action) => {
    
    const newState = _.merge({}, state)

    switch (action.type) {
        
        default:
            return newState;
        }
}

export default ui

END SOLUTION */