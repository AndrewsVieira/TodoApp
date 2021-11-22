import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginUser from './components/Login/Login';
import CreateAccount from "./components/Login/CreateAccount";
import Tasks from "./components/TaskManager/TaskManager";
import { isAuth } from './utils/auth'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginUser />} />
        <Route path='/account' element={<CreateAccount />} />
        <Route path='/taskManager' element={isAuth() ? (<Tasks />) : (<Navigate to='/' />)} />
      </Routes>
    </Router>
  );
}

export default App;
