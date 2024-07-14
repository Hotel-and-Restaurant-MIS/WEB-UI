import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom';
import './App.css';
import "./views/HomeView/HomeView.jsx";
import HomeView from './views/HomeView/HomeView.jsx';
import FacilitiesView from './views/FacilitiesView/FacilitiesView.jsx';
import RoomsView from './views/RoomsView/RoomsView.jsx';
import ContactView from './views/ContactView/ContactView.jsx';
import "./Fonts/Fonts.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/facilities" element={<FacilitiesView />} />
                <Route path="/rooms" element={<RoomsView />} />
                <Route path="/contactus" element={<ContactView />} />
            </Routes>
        </Router>
    );
}

export default App;
