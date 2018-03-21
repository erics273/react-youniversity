/* START SOLUTION */
import DataService from "../services/DataService";
import { refreshAuth } from "../services/AuthService";

const client = new DataService("user");

export function register(user) {

    return dispatch => {
       return client.post(user).then(
            success => {
                dispatch({ type: 'REGISTRATION_SUCCESS', result: {type: "success", message: "You're now one of us! Login and enjoy.", data: {}  }});
            }
        ).catch(
            error => {
                dispatch({ type: 'REGISTRATION_FAIL', result: {type:"error", message: "The other side of the internet rejected the data :(", data: {}  }});
            }
        )
    }

}

export function updateUser(user) {

    return dispatch => {
        return client.put(user).then(
            success => {
                refreshAuth().then(()=>{
                    dispatch({ type: 'USER_UPDATE_SUCCESS', result: {type:"success", message: "Your data has been changed. I hope that's what you wanted", data: {}  }});
                })
            }
        ).catch(
            error => {
                dispatch({ type: 'USER_UPDATE_FAIL', result: {type:"error", message: "The other side of the internet rejected the data :(", data: {}  }});
            }
        )
    }

}
/* ELSE
import DataService from "../services/DataService";
import { refreshAuth } from "../services/AuthService";

const client = new DataService("user");

export function register(user) {

    return dispatch => {
       //Use the client to register a user against the API. 
       //On success/fail dipatch the appropriate action that reflects the result
       //Use the same format as objects dispatched in actions/Auth.js 
    }

}

export function updateUser(user) {

    return dispatch => {
       //Use the client to update a user in the API. 
       //On success/fail dipatch the appropriate action that reflects the result
       //Use the same format as objects dispatched in actions/Auth.js 
       //On update success we should call the "refreshAuth()" method from our AuthService to make sure the updated user info makes it into
       //local storage before dispatching our object.
    }

}
END SOLUTION */