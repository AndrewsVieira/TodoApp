const conn = require('../../database/connect');
const bcrypt = require("bcrypt");

const salt = 5;

exports.create = (req, res) => {
    let body = req.body;

    if (body.password !== body.passwordConfirm) {
        return res.status(422).json({
            message: `As senhas não conferem!`
        })
    }

    bcrypt.hash(body.password, salt, (err, hash) => {
        if (err) {
            let error = "Erro ao salvar a senha"
            console.log(error, err)
            return res.status(400).json({
                message: error
            })
        } else {
            conn.insert([{
                login: body.login,
                password: hash
            }]).into('USER')
                .then(() => {
                    return res.json({
                        message: "Usuário criado com sucesso"
                    })
                }).catch((err) => {
                    let message;
                    if (err.sqlState === "23000") {
                        message = "Este login já existe. Tente outro!";
                    } else {
                        message = "Ocorreu um erro ao criar o usuário!";
                    }
                    return res.status(422).json({
                        message: message
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
            return res.json({
                error: `${err}`
            })
        })
}

exports.getUserByLogin = (req, res) => {
    conn.select()
        .table('USER')
        .where({
            login: `${req.body.login}`
        })
        .then(user => {
            return res.json({
                user: user
            })
        }).catch(err => {
            return res.json({
                error: `${err}`
            })
        })
}