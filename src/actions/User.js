/* START SOLUTION */

export function register(success) {

    return { type: (success) ? 'REGISTRATION_SUCCESS' :  'REGISTRATION_FAIL' };

}

export function update(success) {

    return { type: (success) ? 'USER_UPDATE_SUCCESS' : 'USER_UPDATE_FAIL' };
}


/* ELSE

//The User.js actions file is responsible for holding the Action Creators that support the registration of new users 
//and the updating of existing user information. Consider the scenarios a user might encounter when trying to register
//or update a users information.

//NOTE: Action Creators should return simple JavaScript objects with at least a "type" attribute.
//      It is best practices to use constants for your action type. Consider creating a actionTypes.js file 
//      that holds your actionType constants and importing the relevent actions into this file.

END SOLUTION */