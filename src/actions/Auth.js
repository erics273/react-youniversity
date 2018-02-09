import * as AuthService from "../services/AuthService";

export function login(user) {


    AuthService.login(user).then(
        success => {
            return { type: 'USER_LOGIN_SUCCESS' };
        }

    ).catch(
        error => {
            return { type: 'USER_LOGIN_FAILED' };
        })

}

export function logout() {

    AuthService.logout().then(
        success => {
            return { type: 'USER_LOGOUT' };
        })

}