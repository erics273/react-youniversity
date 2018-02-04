import * as AuthService from "../services/AuthService";

export function login(user) {

    return (dispatch, getState) => {
        return AuthService.login(user).then(
            success => {
                dispatch({ type: 'USER_LOGIN_SUCCESS', result: {type: "success", message: "", data: {} }});
            }

        ).catch(
            error => {
                let errorMessage = error.response.data.exception || "";
                if (error.response.status === 403) {
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
                dispatch({ type: 'USER_LOGIN_FAILED', result: {type: "error", message: errorMessage, data: {} }});
            })
    }
}

export function logout() {

    return dispatch => {
        return AuthService.logout().then(
            success => {
                dispatch({ type: 'USER_LOGOUT', result: {type: "success", message: "It was so great seeing you, buh-bye now!", data: {}  }});
            })
    }
}