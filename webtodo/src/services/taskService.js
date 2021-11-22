import Config from "../utils/Config";
import { getId, getToken } from "../utils/auth";

import { React } from 'react';
import ReactDOM from 'react-dom';
import { Form, Row, Button } from 'react-bootstrap';
import addButton from '../img/library_add_black_24dp.svg';


const config = new Config();
const url = `${config.URL}/tasks`;
const token = getToken();

export async function tasksRequest() {
    let url = `${config.URL}/tasks/${getId()}`;
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

export function createTask(title, description) {
    console.log(getId())

    const bodyRequest = {
        userId: getId(),
        description: description,
        status: 0,
        title: title
    };

    console.log(bodyRequest)

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
                // window.location.href = '/taskManager';
            }).catch(err => {
                alert(err);
            });
        } else {
            return res.json();
        }
    }).then(data => {
        // window.location.href = '/taskManager';
    }).catch(err => {
        alert(err);
    });
}

export function deleteTask(id) {
    const bodyRequest = {
        id: id,
        userId: getId()
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

export function updateTask(id, status, title, description) {
    const bodyRequest = {
        id: id,
        userId: getId(),
        status: status,
        description: description,
        title: title
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
        alert(data.message);
        window.location.href = '/taskManager';
    }).catch(err => {
        console.log(err)
        alert(err);
    });
}

export function getStatus(value) {
    switch (value) {
        case 0:
            return 'Não iniciado';
        case 1:
            return 'Em andamento';
        case 2:
            return 'Finalizado';
        default:
            break;
    }
}

export function openDetailsTask(TaskId, TaskStatus, TaskTitle, TaskDescription) {

    ReactDOM.render(
        <Form>
            <Row className="itemForm" >
                <label>Título</label>
                <Form.Control className="itemInput" type="text"
                    value={TaskTitle}
                    onChange={e => TaskTitle = e.target.value}
                    placeholder="Título da tarefa..." required />
                <label>Descrição</label>
                <Form.Control className="itemInput" type="text"
                    value={TaskDescription}
                    onChange={e => TaskDescription = e.target.value}
                    placeholder="Descrição da tarefa..." required />
                <Button id="addButton"><img onClick={() => updateTask(TaskId, TaskStatus, TaskTitle, TaskDescription)} src={addButton}></img> </Button>
            </Row>
        </Form >,
        document.querySelector(`#task_${TaskId}`)
    );
}