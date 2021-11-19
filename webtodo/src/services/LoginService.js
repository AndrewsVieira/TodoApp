import Config from "../utils/Config";
import { login as setLogin } from "../utils/Auth";

export default function Login(login, password) {
    if (login === "" || password === "" || login === null || password === null) {
        alert("Os campos devem ser preenchidos!")
        window.location.href = '/';
    } else {

        const config = new Config();
        const url = `${config.URL}/login`;
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
            setLogin(data.token, data.id);
            console.log(data.token);
            window.location.href = '/taskManager';
        }).catch(err => {
            alert(err);
        });
    }
}