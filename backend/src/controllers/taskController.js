const conn = require('../../database/connect');


exports.createTask = (req, res) => {
    let body = req.body;

    if (body.task === "" || body.task === null) {
        return res.json({
            message: "A tarefa não pode ser vazia!"
        });
    } else {
        conn.insert([{
            task: body.task
        }]).into('TASK')
            .then(task => {
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
            task: body.task
        }).then(() => {
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

exports.getAllTasks = (req, res) => {
    conn.select()
        .table('TASK')
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
        .where('id', body.id)
        .del().then(() => {
            return res.json({
                message: "Tarefa excluída"
            })
        }).catch(err => {
            return res.json({
                message: "Não foi possível excluir a tarefa. Tente novamente!",
                error: err
            })
        })
}