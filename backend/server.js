const express = require('express'); 
const cors = require('cors');

const app = express();

const protocol = 'http';
const hostname = 'localhost';
const url = `${protocol}://${hostname}`;
const port = 9999;

const { create, getAll } = require('./src/controllers/userController');
const { createTask, getAllTasksByLogin: getAllTasksByLogin, updateTask, deleteTask } = require('./src/controllers/taskController');
const { login } = require('./src/controllers/loginController');

app.use(cors());
app.use(express.json());

app.post('/users', create);
app.get('/users', getAll);

app.post('/login', login);

app.post('/tasks', createTask);
app.get('/tasks/:login', getAllTasksByLogin);
app.put('/tasks', updateTask);
app.delete('/tasks', deleteTask);

app.listen(port, hostname,  () => console.log(`Express started at ${url}:${port}`));