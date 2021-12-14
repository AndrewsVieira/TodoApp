require('dotenv').config();


const express = require('express');
const cors = require('cors');
const app = express();
const url = `${process.env.PROTOCOL}://${process.env.HOST}`;
const { create, getAll } = require('./src/controllers/userController');
const { createTask, getAllTasksByLogin: getAllTasksByLogin, updateTask, deleteTask } = require('./src/controllers/taskController');
const { login } = require('./src/controllers/loginController');
const auth = require('./src/middleware/auth.js');

app.use(cors());
app.use(express.json());
app.post('/users', create);
app.get('/users', auth, getAll);
app.post('/login', login);
app.post('/tasks', auth, createTask);
app.get('/tasks/:login', auth, getAllTasksByLogin);
app.put('/tasks', auth, updateTask);
app.delete('/tasks', auth, deleteTask);

app.listen(process.env.PORT, process.env.HOST, () => console.log(`Express started at ${url}:${process.env.PORT}`));