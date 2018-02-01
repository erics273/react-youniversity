import * as AuthService from "../services/AuthService";

export function login(user) {

    return dispatch => {
        return AuthService.login(user).then(
            response => {
                dispatch({ type: 'USER_LOGIN' });
            },
            error => {
                dispatch({ type: 'USER_LOGIN_FAILED' });
            }
        )
    }
}

export function logout() {

    return dispatch => {
        AuthService.logout().then(
            response => {
                dispatch({ type: 'USER_LOGOUT' });
            })
    }
}

export function register(user) {

    return dispatch => {
        AuthService.register(user).then(
            response => {
                dispatch({ type: 'USER_REGISTERED', result: response.body });
            })
    }
}

export function updateUser(user) {

    //     return dispatch => {
    //         request.put(`${baseUrl}/user`)
    //             .set('Content-Type', 'application/json')
    //             .withCredentials()
    //             .send(user)
    //             .end(
    //             (error, response) => {

    //                 if (error) {
    //                     console.error("could not update user" + error);
    //                     return;
    //                 }

    //                 localStorage.setItem("currentUser", JSON.stringify(response.body));

    //                 dispatch({ type: 'USER_UPDATED', result: response.body });

    //             }
    //             )
    //     }
}