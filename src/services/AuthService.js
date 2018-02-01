import request from 'superagent';
import _ from 'lodash';
import { User } from "../models/User";

const baseUrl = 'http://localhost:8080/api/session';

export function login(user) {

    return request.put(`${baseUrl}`)
        .set('Content-Type', 'application/json')
        .send(user)
        .then(response => {

            const authorizedUser = _.pick(response.body, _.keys(new User()))
            localStorage.setItem("authorized_user", JSON.stringify(authorizedUser));

        }
        )

}

export function logout() {

    return request.delete(`${baseUrl}`)
        .withCredentials()
        .send()
        .then(response => {

            localStorage.removeItem("authorized_user");

        }
        ).catch(error => {
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


// export function register(user) {

//     return request.post(`${baseUrl}/user`)
//         .set('Content-Type', 'application/json')
//         .withCredentials()
//         .send(user)
//         .catch(error => {
//             console.error("could not create user" + error);
//         })

// }

// export function updateUser(user) {

//     return request.put(`${baseUrl}/user`)
//         .set('Content-Type', 'application/json')
//         .withCredentials()
//         .send(user)
//         .then(response => {

//             localStorage.setItem("currentUser", JSON.stringify(response.body));

//         }
//         ).catch(error => {
//             console.error("could not update user" + error);
//         })

// }