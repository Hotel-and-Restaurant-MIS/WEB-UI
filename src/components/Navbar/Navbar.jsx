import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import "../../Fonts/Fonts.css";

export function Navbar(props) {

    return (
        <div className="navbar-main-cont">
            {/* Logo section of the navbar */}
            <div className="nav-logo">
                <h1>L U X U R Y</h1>
                <h2>H O T E L S</h2>
            </div>

            <div style={{ width: "1px" }}></div>
            {/* The above div is used for spacing to align the navbar to the left */}

            {/* Navigation links */}
            <nav className="nav-link-cont">
                {/* Home link */}
                <NavLink end to="/" className={({ isActive }) => (isActive ? 'active-nav-link' : 'nav-link')}>
                    Home
                </NavLink>
                {/* Facilities link */}
                <NavLink to="/facilities" className={({ isActive }) => (isActive ? 'active-nav-link' : 'nav-link')}>
                    Facilities
                </NavLink>
                {/* Rooms link */}
                <NavLink to="/rooms" className={({ isActive }) => (isActive ? 'active-nav-link' : 'nav-link')}>
                    Rooms
                </NavLink>
                {/* Contact Us link */}
                <NavLink to="/contactus" className={({ isActive }) => (isActive ? 'active-nav-link' : 'nav-link')}>
                    Contact Us
                </NavLink>
                <box-icon name='menu'></box-icon>
            </nav>
        </div>
    )
}
