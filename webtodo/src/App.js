import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Routes } from 'react-router-dom';
import LoginUser from './components/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<LoginUser />} path='/'></Route>
      </Routes>
    </Router>
  );
}

export default App;
