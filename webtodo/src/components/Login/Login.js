import { React, useState } from 'react';
import { Col, Form, FormLabel as Label, Row, Button } from 'react-bootstrap';
import Login from '../../services/loginService'
import Header from '../Headers/HeaderOut';

export default function LoginUser() {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    return (
        <>
            <Header />
            <Form id="card">
                <Col>
                    <Row>
                        <Form.Control className="itemInput login" type="text" onChange={e => setEmail(e.target.value)} placeholder="E-mail" required />
                    </Row>
                    <Row>
                        <Form.Control className="itemInput login" type="password" onChange={e => setPassword(e.target.value)} placeholder="Senha" required />
                    </Row>
                    <Row>
                        <Button className="button itemInput login" onClick={() => Login(email, password)}>Entrar</Button>
                    </Row>
                    <Row>
                        <Button className="button itemInput login" onClick={() => window.location.href = '/account'}>Criar conta</Button>
                    </Row>
                </Col>
            </Form>
        </>
    );
}