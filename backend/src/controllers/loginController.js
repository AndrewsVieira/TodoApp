const conn = require('../../database/connect')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();

exports.login = (req, res) => {
    const body = req.body;

    if (body.login == null || body.password == null || body.login == "" || body.password == "")
        return res.status(422).json({ message: "Login e senha são campos obrigatórios!" });

    conn.select()
        .table('USER')
        .where({
            'login': body.login
        }).then(user => {
            const pwd = user[0].password;
            const login = user[0].login;
            bcrypt.compare(body.password, pwd).then(result => {
                if (result) {
                    const token = jwt.sign({
                        login: login
                    }, process.env.SECRET);

                    return res.json({
                        login: login,
                        token: token
                    });
                } else {
                    return res.status(422).json({
                        message: "Login ou senha incorretos."
                    });
                }
            }).catch(err => {
                return res.json({
                    error: `${err}`
                })
            })
        }).catch(err => {
            return res.json({
                error: `${err}`
            })
        })
}

exports.logout = (req, res) => {
    return res.json({
        message: "Usuário desconectado"
    });
}