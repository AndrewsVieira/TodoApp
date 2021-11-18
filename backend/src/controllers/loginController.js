const conn = require('../../database/connect')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();

exports.login = (req, res) => {
    const body = req.body;

    if (body.login == null || body.password == null || body.login == "" || body.password == "")
        return res.status(422).json({ message: "Login e senha são campos obrigatórios!" });

    conn.select().table('USER').where({ login: `'${body.login}''` }).then(user => {
        if (user == undefined || user == null) {
            console.log("Usuário não encontrado.");
            return res.status(422).json(Message("Usuário ou senha incorretos."));
        }

        console.log(`senha da request: ${body.password}`);
        console.log(`senha do usuário: ${user}`);

        bcrypt.compare(body.password, user.password).then(result => {
            if (result) {
                const token = jwt.sign({
                    name: user.login
                }, process.env.SECRET);

                return res.json({
                    token: token,
                    id: user.id
                });
            } else {
                return res.status(422).json(Message("Usuário ou senha incorretos."));
            }
        })
    }).catch(err => {
        console.log('Error ao logar', err);
    });
};

exports.logout = (req, res) => {
    return res.json(Message("Usuário desconectado"));
}