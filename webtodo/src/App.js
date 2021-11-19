import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginUser from './components/Login/Login';
import CreateAccount from "./components/Login/CreateAccount";
import Tasks from "./components/TaskManager/TaskManager";
import { isAuth } from './utils/Auth'

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path='/' element={!isAuth() ? (<LoginUser />) : (<Navigate to='/taskManager' />)} />
          <Route path='/account' element={<CreateAccount />} />
          <Route path='/taskManager' element={isAuth() ? (<Tasks />) : (<Navigate to='/' />)} />
      </Routes>
    </Router>
    </Container >
  );
}

export default App;
