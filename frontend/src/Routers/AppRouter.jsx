import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../Pages/MainPage';
import HomePage from '../Pages/HomePage';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
function App() {
 return (
    <Router>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/Home" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
      </Routes>
    </Router>
 );
}

export default App;
