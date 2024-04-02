import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../Pages/MainPage';
import HomePage from '../Pages/HomePage';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import PlantHealth from '../Pages/PlantHealth';
import ExternalRedirect from '../Routers/PyRoute.jsx';
import InfoForum from '../Pages/InfoForum.jsx';
import WeatherComponent from '../Pages/WeatherComponent.jsx';
function App() {
 return (
    <Router>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/planthealth" element={<PlantHealth />} />
        <Route path="/planthealth2" element={<ExternalRedirect url="http://127.0.0.1:5000/" />} />
        <Route path="/weather" element={<WeatherComponent />} />
        <Route path="/info" element={<InfoForum />} />

      </Routes>
    </Router>
 );
}

export default App;
