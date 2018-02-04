import {DataService} from "../services/DataService";
import { refreshAuth } from "../services/AuthService";

const client = new DataService("user");

export function register(user) {

    return dispatch => {
       return client.create(user).then(
            success => {
                dispatch({ type: 'USER_REGISTERED', result: {type: "success", message: "You're now one of us! Login and enjoy.", data: {}  }});
            }
        ).catch(
            error => {
                dispatch({ type: 'USER_REGISTRATION_FAILED', result: {type:"error", message: "The other side of the internet rejected the data :(", data: {}  }});
            }
        )
    }

}

export function updateUser(user) {

    return dispatch => {
        return client.update(user).then(
            success => {
                refreshAuth().then(()=>{
                    dispatch({ type: 'USER_UPDATED', result: {type:"success", message: "Your data has been changed. I hope that's what you wanted", data: {}  }});
                })
            }
        ).catch(
            error => {
                dispatch({ type: 'USER_UPDATE_FAILED', result: {type:"error", message: "The other side of the internet rejected the data :(", data: {}  }});
            }
        )
    }

}