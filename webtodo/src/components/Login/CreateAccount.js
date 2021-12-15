import { React, useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import CreateAccount from '../../services/accountService';
import Header from '../Headers/Header';

export default function LoginUser() {

    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordConfirm, setPasswordConfirm] = useState(null);

    function clean() {
        alert("As senhas não conferem")
        setPassword("");
        setPasswordConfirm("");
        document.getElementById("pwd").value = "";
        document.getElementById("cpwd").value = "";
    }

    return (
        <>
            <Header />
            <Form id="card">
                <Col>
                    <Row>
                        <Form.Control className="itemInput login" type="text" onChange={e => setLogin(e.target.value)} placeholder="Login" required />
                    </Row>
                    <Row>
                        <Form.Control id="pwd" className="itemInput login" type="password" onChange={e => setPassword(e.target.value)} placeholder="Senha" required />
                    </Row>
                    <Row>
                        <Form.Control id="cpwd" className="itemInput login" type="password" onChange={e => setPasswordConfirm(e.target.value)} placeholder="Confirmar Senha" required />
                    </Row>
                    <Row>
                        <Button className="button itemInput login" onClick={() => password === passwordConfirm ? CreateAccount(login, password, passwordConfirm) : clean()}>Salvar</Button>
                    </Row>
                    <Row>
                        <Button className="button itemInput login" onClick={() => window.location.href = '/'}>Voltar</Button>
                    </Row>
                </Col>
            </Form>
        </>
    );
}