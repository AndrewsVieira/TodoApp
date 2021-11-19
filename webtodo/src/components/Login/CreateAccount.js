import { React, useState } from 'react';
import { Col, Form, FormLabel as Label, Row } from 'react-bootstrap';
import CreateAccount from '../../services/CreateAccountService'

export default function LoginUser() {

    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordConfirm, setPasswordConfirm] = useState(null);

    function clean() {
        alert("As senhas não conferem")
        setPassword("");
        setPasswordConfirm("")
    }

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
                    <Form.Control type="password" onChange={e => setPasswordConfirm(e.target.value)} placeholder="Confirmar Senha" required />
                </Row>
                <Row>
                    <Label onClick={() => password === passwordConfirm ? CreateAccount(login, password, passwordConfirm) : clean()}>Salvar</Label>
                </Row>
                <Row>
                <Label onClick={() => window.location.href = '/'}>
                        Voltar
                    </Label>
                </Row>
            </Col>
        </Form>
    );
}