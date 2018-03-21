/* START SOLUTION */

export function login(success) {

    return { type: (success) ? 'LOGIN_SUCCESS' : 'LOGIN_FAIL' };

}

export function logout(success) {

    return { type: (success) ? 'LOGOUT_SUCCESS' : 'LOGOUT_FAIL' };

}


/* ELSE

//The Auth.js actions file is responsible for holding the Action Creators that support the login/logout process
//Consider the scenarios a user might encounter when trying to login to a website and include the actions you
//would need to dispatch for each scenario.

//NOTE: Action Creators should return simple JavaScript objects with at least a "type" attribute.
//      It is best practices to use constants for your action type. Consider creating a actionTypes.js file 
//      that holds your actionType constants and importing the relevent actions into this file.

END SOLUTION */