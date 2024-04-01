import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../Pages/MainPage';
import HomePage from '../Pages/HomePage';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import PlantHealth from '../Pages/PlantHealth';
function App() {
 return (
    <Router>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/planthealth" element={<PlantHealth />} />

      </Routes>
    </Router>
 );
}

export default App;
