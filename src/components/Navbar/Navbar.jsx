import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import "../../Fonts/Fonts.css";

export function Navbar(props) {


    return (
        <div className="navbar-main-cont">
            <div className="nav-logo"><h1>L U X U R Y</h1> <h2>H O T E L S</h2></div>
            <div style={{ width: "1px" }}></div>
            {/* Keep the above div otherwise the navbar won't be aligned to the left */}
            <nav className="nav-link-cont">
                <NavLink end to="/" className={({ isActive }) => (isActive ? 'active-nav-link' : 'nav-link')}>Home</NavLink>
                <NavLink to="/facilities" className={({ isActive }) => (isActive ? 'active-nav-link' : 'nav-link')}>Facilities</NavLink>
                <NavLink to="/rooms" className={({ isActive }) => (isActive ? 'active-nav-link' : 'nav-link')}>Rooms</NavLink>
                <NavLink to="/contactus" className={({ isActive }) => (isActive ? 'active-nav-link' : 'nav-link')}>Contact Us</NavLink>
            </nav>

        </div>
    )
}
