import _ from 'lodash';

const  ui = (state = {}, action) => {

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