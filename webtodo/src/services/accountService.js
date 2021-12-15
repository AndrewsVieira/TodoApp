import conf from "../utils/config.json";

export default function CreateAccount(login, password, passwordConfirm) {
    if (login === "" || password === "" || password === null || passwordConfirm === null) {
        alert("Os campos devem ser preenchidos!")
    } else {
        const url = `${conf.protocol}://${conf.host}:${conf.port}/users`;
        const bodyRequest = {
            login: login,
            password: password,
            passwordConfirm: passwordConfirm
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
                    return;
                }).catch(err => {
                    alert(err);
                });
            } else {
                return res.json();
            }
        }).then(data => {
            alert(data.message);
            window.location.href = '/';
        }).catch(err => {
            console.log(err);
        });
    }
}