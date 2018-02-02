import { DataService } from './DataService'
import _ from 'lodash';
import { User } from "../models/User";

const client = new DataService("session");

export function login(user) {

    return client.update(user).then(
        response => {
            const authorizedUser = _.pick(response.data, _.keys(new User()))
            localStorage.setItem("authorized_user", JSON.stringify(authorizedUser));

        }
    )

}

export function refreshAuth() {

    return client.read().then(
        response => {
            const authorizedUser = _.pick(response.data, _.keys(new User()))
            localStorage.setItem("authorized_user", JSON.stringify(authorizedUser));

        }
    )

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

export function getAuthUser() {

    return JSON.parse(localStorage.getItem("authorized_user"));

}