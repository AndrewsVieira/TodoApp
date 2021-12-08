import conf from "../utils/config.json";
import { login as setLogin } from "../utils/auth";

export default function Login(login, password) {
    if (login === "" || password === "" || login === null || password === null) {
        alert("Os campos devem ser preenchidos!")
        window.location.href = '/';
    } else {

        const url = `${conf.protocol}://${conf.host}:${conf.port}/login`;
        const bodyRequest = {
            login: login,
            password: password
        };
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyRequest)
        };

        fetch(url, options).then(res => {
            if (!res.ok) {
                res.json().then(data => {
                    alert(data.message);
                    window.location.href = '/';
                }).catch(err => {
                    alert(err);
                });
            } else {
                return res.json();
            }
        }).then(data => {
            setLogin(data.token, data.login);
            window.location.href = '/taskManager';
        }).catch(err => {
            alert(err);
        });
    }
}