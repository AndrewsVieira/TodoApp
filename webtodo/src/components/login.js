import { React, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Routes } from 'react-router-dom';

export default function LoginUser() {
    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);


    return (
        <Routes>
            <Container>
                <Form>
                    <Col>
                        <div >
                            <Row>
                                <Form.Control type="text" onChange={e => setLogin(e.target.value)} placeholder="Login" required />
                            </Row>
                            <Row>
                                <Form.Control type="password" onChange={e => setPassword(e.target.value)} placeholder="Senha" required />
                            </Row>
                            <Row>
                                <Col>
                                    <Button onClick={() => alert(login, password)}>Entrar</Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Form>
            </Container>
        </Routes>
    );
}