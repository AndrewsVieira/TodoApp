import { React, useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import Login from '../../services/loginService';
import Header from '../Headers/Header';

export default function LoginUser() {

    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);

    return (
        <>
            <Header />
            <Form id="card">
                <Col>
                    <Row>
                        <Form.Control className="itemInput login" type="text" onChange={e => setLogin(e.target.value)} placeholder="Login" required />
                    </Row>
                    <Row>
                        <Form.Control className="itemInput login" type="password" onChange={e => setPassword(e.target.value)} placeholder="Senha" required />
                    </Row>
                    <Row>
                        <Button className="button itemInput login" onClick={() => Login(login, password)}>Entrar</Button>
                    </Row>
                    <Row>
                        <Button className="button itemInput login" onClick={() => window.location.href = '/account'}>Criar conta</Button>
                    </Row>
                </Col>
            </Form>
        </>
    );
}