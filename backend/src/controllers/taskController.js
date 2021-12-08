const conn = require('../../database/connect');
const jwt = require('jsonwebtoken');


exports.createTask = (req, res) => {
    let body = req.body;

    if (body.task === "" || body.task === null) {
        return res.json({
            message: "A tarefa não pode ser vazia!"
        });
    } else {
        conn.insert([{
            task: body.task,
            status: body.status,
            login: body.login
        }]).into('TASK')
            .then(() => {
                return res.json({
                    message: "Tarefa criada com sucesso"
                })
            }).catch((err) => {
                return res.json({
                    message: "Ocorreu um erro ao criar a tarefa!",
                    error: err
                })
            });
    }
}

exports.updateTask = (req, res) => {
    let body = req.body;

    

    conn.table('TASK')
        .where('id', body.id)
        .update({
            task: body.task,
            status: body.status
        }).then((rows) => {
            console.log(rows);
            return res.json({
                message: "Tarefa alterada com sucesso!"
            })
        }).catch(err => {
            return res.json({
                message: "Ocorreu um erro ao alterar a tarefa. Tente novamente.",
                error: err
            })
        })
}

exports.getAllTasksByLogin = (req, res) => {
    conn.select()
        .table('TASK')
        .where('login', req.params.login)
        .then(tasks => {
            return res.json({
                tasks: tasks
            })
        }).catch(err => {
            return res.json({
                error: `${err}`
            })
        });
}

exports.deleteTask = (req, res) => {
    const body = req.body;
    conn.table('TASK')
        .where({
            'id': body.id,
            'login': body.login
        })
        .del().then((rows) => {
            if (rows) {
                return res.json({
                    message: "Tarefa excluída"
                })
            } else {
                return res.json({
                    message: `Não há tarefa com o id: ${body.id} ou não há tarefas do usuário: ${body.login}`
                })
            }
        }).catch(err => {
            return res.json({
                message: "Não foi possível excluir a tarefa. Tente novamente!",
                error: err
            })
        })
}