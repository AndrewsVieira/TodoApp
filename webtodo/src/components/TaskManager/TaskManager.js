import { React, useEffect, useState } from 'react';
import { Form } from 'reactstrap';
import { tasksRequest, deleteTask, completeTask } from '../../services/taskService';
import TaskForm from './TaskForm';
import Header from '../Headers/HeaderIn';
import deleteImg from '../../img/deleteImg.png';
import Index from '../../style/Index.css';

export default function Tasks() {

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
                        <TaskForm />
                        {tasks.map(res => {
                            return (
                                <ul >
                                    <li >
                                        <input type="checkbox" checked={res.completed} onChange={(e) => { completeTask(res.id, e.target.checked) }} />
                                        <label id="taskItem" style={res.completed ? { 'text-decoration-line': 'line-through', 'font-style': 'italic', 'opacity': 0.5 } : {}}>{res.task}</label>
                                        <label onClick={e => deleteTask(res.id)}><img src={deleteImg} style={{ width: 15 }}></img></label>
                                    </li>
                                </ul>
                            );
                        })}
                    </Form>
                </section>
            </main>
        </>

    );
}