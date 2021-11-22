const TOKEN_KEY = 'to-do-app-token';
const USER_ID = 'to-do-app-user-id';

export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
}

export const login = (token, login) => {
    if (token) {
        localStorage.setItem(TOKEN_KEY, token);
        localStorage.setItem(USER_ID, login);
    }
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_ID);
    window.location.href = '/';
}

export const getId = () => {
    return localStorage.getItem(USER_ID);
}

export const isAuth = () => {
    return getToken() !== null;
}