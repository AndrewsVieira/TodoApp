const User = require("../models/user");
const conn = require('../../database/connect');
const bcrypt = require("bcrypt");

const salt = 5;

exports.create = (req, res) => {
    let body = req.body;
    let user = new User(body.login, body.password);

    bcrypt.hash(body.password, salt, (err, hash) => {
        if (err) {
            let error = "Erro ao salvar a senha"
            console.log(error, err)
            return res.status(400).json({
                message: error
            })
        } else {
            conn.insert([{
                login: user.login,
                password: hash
            }]).into('USER')
                .then(user => {
                    return res.json({
                        message: "Usuário criado com sucesso",
                        name: user.login
                    })
                }).catch((err) => {
                    return res.json({
                        message: "Ocorreu um erro ao criar o usuário",
                        error: err
                    })
                })
        }
    })

}

exports.getAll = (req, res) => {
    conn.select()
        .table('USER')
        .then(users => {
            return res.json({
                users: users
            })
        }).catch(err => {
            let message = `ERRO: Ocorreu um erro interno. Tente novamente.`;
            return res.json({
                error: message
            })
        })
}