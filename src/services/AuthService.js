import DataService from './DataService'
import _ from 'lodash';
import User from "../models/User";

const client = new DataService("session");

export function login(user) {

    return client.put(user).then(
        response => {
            setAuth(response.data);
        }
    )

}

export function refreshAuth() {

    return client.get().then(
        response => {
            setAuth(response.data);
        }
    )

}

function setAuth(user){
    const authorizedUser = _.omit(_.pick(user, _.keys(new User())), ["password"]);
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