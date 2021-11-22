import { React, useState } from 'react';
import { Form, FormLabel as Label, Row, Container, Button } from 'react-bootstrap';
import { createTask } from '../../services/taskService';
import addButton from '../../img/library_add_black_24dp.svg'

export default function TaskForm() {

    const [task, setTask] = useState();

    return (
        <Form>
            <Row className="itemForm" >
                <Form.Control className="itemInput"  type="text"
                    onChange={e => setTask(e.target.value)}
                    placeholder="Digite uma tarefa..." required />
                <Button id="addButton"><img onClick={() => createTask(task)} src={addButton}></img> </Button>
            </Row>
        </Form >
    );
}