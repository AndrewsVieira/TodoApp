const knex = require('knex')
require('dotenv').config()

const connect = knex({
    client: 'mysql2',
    connection: {
        host: process.env.HOST,
        user: process.env.USUARIO,
        password: process.env.SENHA,
        database: process.env.BANCODEDADOS
    }
})

module.exports = connect;