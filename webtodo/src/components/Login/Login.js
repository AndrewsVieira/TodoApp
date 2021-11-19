import { React, useState } from 'react';
import { Col, Form, FormLabel as Label, Row } from 'react-bootstrap';
import Login from '../../services/LoginService'

export default function LoginUser() {

    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);

    return (
        <Form>
            <Col>
                <Row>
                    <Form.Control type="text" onChange={e => setLogin(e.target.value)} placeholder="Login" required />
                </Row>
                <Row>
                    <Form.Control type="password" onChange={e => setPassword(e.target.value)} placeholder="Senha" required />
                </Row>
                <Row>
                    <Label onClick={() => Login(login, password)}>Entrar</Label>
                </Row>
                <Row>
                    <Label onClick={() => window.location.href = '/account'}>
                        Criar conta
                    </Label>
                </Row>
            </Col>
        </Form>
    );
}