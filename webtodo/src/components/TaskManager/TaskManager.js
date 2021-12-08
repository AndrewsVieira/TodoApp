import { React, useEffect, useState } from 'react';
import { Form, Row, Button } from 'react-bootstrap';
import { tasksRequest, deleteTask, updateTask } from '../../services/taskService';
import Header from '../Headers/HeaderIn';
import deleteImg from '../../img/deleteImg.png';
import { createTask } from '../../services/taskService';
import addButton from '../../img/library_add_black_24dp.svg';
import Index from '../../style/Index.css';

export default function Tasks() {

    const [task, setTask] = useState(null);

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
                                    onChange={e => setTask(e.target.value)}
                                    placeholder="Descrição da tarefa..." required />
                                <Button id="addButton"><img onClick={() => createTask(task)} src={addButton}></img> </Button>
                            </Row>
                        </Form >
                        {tasks.map(res => {
                            return (
                                <ul >
                                    <li>
                                        <label><input type="checkbox" checked={res.status} onChange={() => {
                                            res.status ? res.status = 0 : res.status =  1;
                                            updateTask(res.id, res.status, res.task)
                                        }}></input></label>
                                        <label id="taskItem"
                                            style={res.status === 1 ? { 'text-decoration-line': 'line-through', 'font-style': 'italic', 'opacity': 0.5 } : {}}
                                        >{res.task}
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

