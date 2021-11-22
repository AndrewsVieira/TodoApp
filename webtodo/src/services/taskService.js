import Config from "../utils/Config";
import { getLogin, getToken } from "../utils/auth";

const config = new Config();
const url = `${config.URL}/tasks`;
const token = getToken();

export async function tasksRequest() {
    let url = `${config.URL}/tasks/${getLogin()}`;
    const options = {
        method: 'get',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    let res = await fetch(url, options);
    let data = await res.json();
    return data.tasks;
}

export function createTask(task) {
    const bodyRequest = {
        login: getLogin(),
        task: task,
        completed: false
    };

    const options = {
        method: 'post',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyRequest)
    };

    fetch(url, options).then(res => {
        if (!res.ok) {
            res.json().then(data => {
                alert(data.message);
                window.location.href = '/taskManager';
            }).catch(err => {
                alert(err);
            });
        } else {
            return res.json();
        }
    }).then(data => {
        window.location.href = '/taskManager';
    }).catch(err => {
        alert(err);
    });
}

export function deleteTask(id) {
    const bodyRequest = {
        id: id,
        login: getLogin()
    };

    const options = {
        method: 'delete',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyRequest)
    };

    fetch(url, options).then(res => {
        if (!res.ok) {
            res.json().then(data => {
                alert(data.message);
            }).catch(err => {
                alert(err);
            });
        } else {
            return res.json();
        }
    }).then(data => {
        alert(data.message);
    }).catch(err => {
        alert(err);
    });
}

export function completeTask(id, completed) {
    const bodyRequest = {
        id: id,
        login: getLogin(),
        completed: completed
    };

    const options = {
        method: 'put',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyRequest)
    };

    fetch(url, options).then(res => {
        if (!res.ok) {
            res.json().then(data => {
                alert(data.message);
            }).catch(err => {
                alert(err);
            });
        } else {
            return res.json();
        }
    }).then(data => {
        console.log(data.message);
    }).catch(err => {
        alert(err);
    });
}
