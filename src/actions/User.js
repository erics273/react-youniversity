import * as AuthService from "../services/AuthService";

export function login(user) {

    return (dispatch, getState) => {
        return AuthService.login(user).then(
            success => {
                dispatch({ type: 'USER_LOGIN_SUCCESS' });
            },
            error => {
                let errorMessage = error.response.body.exception || "";
                if (error.status === 403) {
                    if (errorMessage.includes("UsernameNotFound")) {
                        errorMessage = "We can't seem find that username"
                    }
                    else if (errorMessage.includes("BadCredentials")) {
                        errorMessage = "Those credentials just don't add up to a login"
                    }
                    else {
                        errorMessage = "Not sure what the heck happened but we let someone know"
                    }
                }
                dispatch({ type: 'USER_LOGIN_FAILED', errorMessage: errorMessage });
            }
        )
    }
}

export function logout() {

    return dispatch => {
        return AuthService.logout().then(
            success => {
                dispatch({ type: 'USER_LOGGED_OUT', successMessage: "It was so great seeing you, buh-bye now!" });
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