import Config from "../utils/Config";

export default function CreateAccount(login, password, passwordConfirm) {
    if (login === "" || password === "" || login === null || password === null) {
        alert("Os campos devem ser preenchidos!")
        window.location.href = '/account';
    } else {
        const config = new Config();
        const url = `${config.URL}/users`;
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
                    window.location.href = '/account';
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
            alert(err);
        });
    }
}