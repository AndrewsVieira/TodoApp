import { React, useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { Container } from 'react-bootstrap';
import tasksRequest from '../../services/TaskService';

export default function Tasks() {

    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        async function getTasks() {
            setTasks(await tasksRequest());
        }
        getTasks();
    }, []);

    return (
        <Container>
            <Table className="rankingPanel" xs="auto" >
                <thead>
                    <tr >
                        <th scope="row" >Id</th>
                        <th scope="row">Tarefa</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(res => {
                        return (
                            <tr>
                                <td>{res.id}</td>
                                <td>{res.task}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </Container >
    );
}