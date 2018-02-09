/* START SOLUTION */
import { DataService } from './DataService'
import _ from 'lodash';
import { User } from "../models/User";

const client = new DataService("session");

export function login(user) {

    return client.update(user).then(
        response => {
            setAuth(response.data);
        }
    )

}

export function refreshAuth() {

    return client.read().then(
        response => {
            setAuth(response.data);
        }
    )

}

function setAuth(user){
    const authorizedUser = _.omit(_.pick(user, _.keys(new User())), ["id"]);
    localStorage.setItem("authorized_user", JSON.stringify(authorizedUser));
}

export function logout() {

    return client.delete().then(
        response => {

            localStorage.removeItem("authorized_user");

        }
    ).catch(
        error => {
            console.error("could not logout user", error);
    })

}

export function requireAuth(nextState, replace) {
    if (!isAuthorized()) {
        replace({ pathname: '/' });
    }
}

export function isAuthorized() {

    if (!localStorage.getItem("authorized_user")) {
        return false;
    }

    return true;

}

export function getAuth() {

    return JSON.parse(localStorage.getItem("authorized_user"));

}
/* ELSE

//This service will handle all tasks related to authentication
//
//Imports:
//    DataService - Our service that handles communication with our third party api
//                  Should be initialized with the "session" endpoint. Method calls
//                  on the service return a promise.
//    
//    lodash (recommended) - Library to help us work with our various objects
//
//Main Methods:
//    login(user) - should take a user and verify their credentials
//                  against the third party api using our DataService
//                  Should store user information in LocalStorge on successful
//                  login using the setAuth() method outlined below
//    
//    refreshAuth() - Should use the DataService.read() method to refresh the 
//                    user details from the server making sure to store the refreshed
//                    user details with setAuth().
//  
//    setAuth() - Should put our users details in LocalStorage.
//                 We should make sure the user details we put in LocalStorage
//                 match our user model.
//
//    getAuth() - Get our user details out of local storage;  
//                
//    logut() - Use our data service and make a delete ruquest to kill the auth
//              and remove any traces of the auth from LocalStorage
//    
//    requireAuth() - A utility method we will use on our routes to make sure we have
//                    an authorized user before accessing the route.
// 

END SOLUTION */

