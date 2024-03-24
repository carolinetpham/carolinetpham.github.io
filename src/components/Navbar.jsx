// src/components/Navbar.jsx
import React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar" >
            <a className="navbar-brand" href="#">CP</a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                        <a className="nav-link" href="#">Skills</a>
                        <a className="nav-link" href="#">Projects</a>
                        <a className="nav-link" href="#">Experience</a>
                    </li>
                </ul>
            </div>
        </nav >
    )
};

