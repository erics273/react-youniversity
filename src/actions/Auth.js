import * as AuthService from "../services/AuthService";

export function login(user) {

    return (dispatch, getState) => {
        return AuthService.login(user).then(
            success => {
                dispatch({ type: 'LOGIN_SUCCESS', result: {type: "info", message: "Yay! you remembered your password", data: {} }});
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
                dispatch({ type: 'LOGIN_FAIL', result: {type: "error", message: errorMessage, data: {} }});
            })
    }
}

export function logout() {

    return dispatch => {
        return AuthService.logout().then(
            success => {
                dispatch({ type: 'LOGOUT_SUCCESS', result: {type: "success", message: "It was so great seeing you, buh-bye now!", data: {}  }});
            }).catch(error => {
                dispatch({ type: 'LOGOUT_FAIL', result: {type: "success", message: "It was so great seeing you, buh-bye now!", data: {}  }});
            })
    }
}