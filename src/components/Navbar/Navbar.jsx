import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import "../../Fonts/Fonts.css";

export function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }

    return (
        <div className="navbar-main-cont">
            {/* Logo section of the navbar */}
            <div className="nav-logo">
                <h1>L U X U R Y</h1>
                <h2>H O T E L S</h2>
            </div>

            {/* Navigation links */}
            <div className={`nav-links ${isMenuOpen ? 'show-menu' : ''}`}>
                <nav className="nav-link-cont">
                    <div>
                        <NavLink end to="/" className={({ isActive }) => (isActive ? 'active-nav-link' : 'nav-link')}>
                            Home
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/facilities" className={({ isActive }) => (isActive ? 'active-nav-link' : 'nav-link')}>
                            Facilities
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/rooms" className={({ isActive }) => (isActive ? 'active-nav-link' : 'nav-link')}>
                            Rooms
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/contactus" className={({ isActive }) => (isActive ? 'active-nav-link' : 'nav-link')}>
                            Contact Us
                        </NavLink>
                    </div>
                </nav>
            </div>

            {/* Hamburger/Close button */}
            <div className="nav-btn-cont"
                onClick={toggleMenu}
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation">
                <i className={isMenuOpen ? 'bx bx-x' : 'bx bx-menu'}></i>
            </div>
        </div>
    );
}
