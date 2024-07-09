import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    NavLink,
} from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Facilities from './components/Facilities/Facilities.jsx';
import Rooms from './components/Rooms/Rooms.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <header className="header">
                    <div className="logo">
                        <h1>L U X U R Y</h1>
                        <h2>HOTELS</h2>
                    </div>
                    <nav>
                        <div>
                            <NavLink end to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>
                                Home
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/facilities" className={({ isActive }) => (isActive ? 'active' : '')}>
                                Facilities
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/rooms" className={({ isActive }) => (isActive ? 'active' : '')}>
                                Rooms
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/contactus" className={({ isActive }) => (isActive ? 'active' : '')}>
                                Contact Us
                            </NavLink>
                        </div>
                    </nav>
                </header>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/facilities" element={<Facilities />} />
                    <Route path="/rooms" element={<Rooms />} />
                    <Route path="/contactus" element={<ContactUs />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
