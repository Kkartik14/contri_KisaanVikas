import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../Pages/MainPage';
import HomePage from '../Pages/HomePage';

function App() {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Home" element={<MainPage />} />
      </Routes>
    </Router>
 );
}

export default App;
