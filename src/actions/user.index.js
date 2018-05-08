import * as User from './constants';

export function authSuccess(obj) {
    const {...data} = obj;
    return {type: User.AUTH_SUCCESS, payload: data};
}

export function errorMsg(msg) {
    return {type: User.ERROR_MSG, msg};
}

export function clearErrorMsg() {
    return {
        type: User.CLEAR_ERROR_MSG
    };
}

export function registerSuccess(msg) {
    return {
        type: User.REGISTER_SUCCESS,
        msg
    };
}

export function loadUser(userInfo) {
    return {type: User.LOAD_USER, payload: userInfo};
}

export function clearAuth() {
    return {type: User.CLEAR_AUTH};
}
