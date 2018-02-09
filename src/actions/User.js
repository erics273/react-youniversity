import { DataService } from "../services/DataService";
import { refreshAuth } from "../services/AuthService";

const client = new DataService("user");

export function register(user) {

    client.create(user).then(
        success => {
            return { type: 'USER_REGISTERED' };
        }
    ).catch(
        error => {
            return { type: 'USER_REGISTRATION_FAILED' };
        }
        )


}

export function updateUser(user) {

    client.update(user).then(
        success => {
            refreshAuth().then(() => {
                return { type: 'USER_UPDATED' };
            })
        }
    ).catch(
        error => {
            return { type: 'USER_UPDATE_FAILED' };
        }
        )


}