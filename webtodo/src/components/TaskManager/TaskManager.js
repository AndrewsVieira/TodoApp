import { React, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { DropdownButton, Form, Row, Button, Dropdown } from 'react-bootstrap';
import { tasksRequest, deleteTask, updateTask, getStatus, openDetailsTask } from '../../services/taskService';
import Header from '../Headers/HeaderIn';
import deleteImg from '../../img/deleteImg.png';
import { createTask } from '../../services/taskService';
import addButton from '../../img/library_add_black_24dp.svg';
import Index from '../../style/Index.css';

export default function Tasks() {

    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);

    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        async function getTasks() {
            setTasks(await tasksRequest());
        }
        getTasks();
    }, [tasks]);

    return (
        <>
            <Header />
            <main>
                <section>

                    <Form id="card">
                        <Form>
                            <Row className="itemForm" >
                                <Form.Control className="itemInput" type="text"
                                    onChange={e => setTitle(e.target.value)}
                                    placeholder="Título da tarefa..." required />
                                <Form.Control className="itemInput" type="text"
                                    onChange={e => setDescription(e.target.value)}
                                    placeholder="Descrição da tarefa..." required />
                                <Button id="addButton"><img onClick={() => createTask(title, description)} src={addButton}></img> </Button>
                            </Row>
                        </Form >
                        {tasks.map(res => {
                            return (
                                <ul >
                                    <li>


                                        <DropdownButton id="dropdown-item-button" title={getStatus(res.status)}
                                            name="status" onSelect={(key) => { updateTask(res.id, key, res.title, res.description) }}>
                                            <Dropdown.Item eventKey="0" as="button">Não iniciado</Dropdown.Item>
                                            <Dropdown.Item eventKey="1" as="button">Em andamento</Dropdown.Item>
                                            <Dropdown.Item eventKey="2" as="button">Finalizado</Dropdown.Item>
                                        </DropdownButton>

                                        <label id="taskItem"
                                            style={res.status === 2 ? { 'text-decoration-line': 'line-through', 'font-style': 'italic', 'opacity': 0.5 } : {}}
                                            onClick={() => {
                                                openDetailsTask(res.id, res.status, res.title, res.description)
                                            }}
                                        >{res.title}
                                        </label>
                                        <label onClick={e => deleteTask(res.id)}><img src={deleteImg} style={{ width: 15 }}></img></label>
                                    </li>
                                    <div id={`task_${res.id}`} ></div>
                                </ul>
                            );
                        })}
                    </Form>
                </section>
            </main>
        </>

    );
}

