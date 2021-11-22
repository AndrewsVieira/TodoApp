const TOKEN_KEY = 'to-do-app-token';
const LOGIN = 'to-do-app-login';

export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
}

export const login = (token, login) => {
    if (token) {
        localStorage.setItem(TOKEN_KEY, token);
        localStorage.setItem(LOGIN, login);
    }
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(LOGIN);
    window.location.href = '/';
}

export const getLogin = () => {
    return localStorage.getItem(LOGIN);
}

export const isAuth = () => {
    return getToken() !== null;
}