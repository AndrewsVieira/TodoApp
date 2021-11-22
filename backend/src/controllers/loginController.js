const conn = require('../../database/connect')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();

exports.login = (req, res) => {
    const body = req.body;

    if (body.email == null || body.password == null || body.email == "" || body.password == "")
        return res.status(422).json({ message: "E-mail e senha são campos obrigatórios!" });

    conn.select()
        .table('USER')
        .where({
            'email': body.email
        }).then(user => {
            const pwd = user[0].password;
            const id = user[0].id;
            bcrypt.compare(body.password, pwd).then(result => {
                if (result) {
                    const token = jwt.sign({
                        pwd: pwd
                    }, process.env.SECRET);

                    return res.json({
                        id: id,
                        token: token
                    });
                } else {
                    return res.status(422).json({
                        message: "E-mail ou senha incorretos."
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