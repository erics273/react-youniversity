import * as AuthService from "../services/AuthService";

export function login(user) {

    return (dispatch, getState) => {
        return AuthService.login(user).then(
            success => {
                dispatch({ type: 'USER_LOGIN_SUCCESS' });
            },
            error => {
                dispatch({ type: 'USER_LOGIN_FAILED' });
            }
        )
    }
}

export function logout() {

    return dispatch => {
        return AuthService.logout().then(
            success => {
                dispatch({ type: 'USER_LOGGED_OUT' });
            })
    }
}

export function register(user) {

//     return dispatch => {
//         AuthService.register(user).then(
//             response => {
//                 dispatch({ type: 'USER_REGISTERED', result: response.body });
//             })
//     }
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