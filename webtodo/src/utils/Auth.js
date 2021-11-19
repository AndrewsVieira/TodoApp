const TOKEN_KEY = 'to-do-app-token'
const ID_USER = 'ID';

export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
}

export const login = (token, id) => {
    if (token) {
        localStorage.setItem(TOKEN_KEY, token);
        localStorage.setItem(ID_USER, id);
    }
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(ID_USER);
    window.location.href = '/';
}

export const getId = () => {
    return localStorage.getItem(ID_USER);
}

export const isAuth = () => {
    return getToken() !== null;
}