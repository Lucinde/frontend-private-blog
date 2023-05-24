import React from 'react';
import './Navigation.css';
import {Link, NavLink} from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <div className="nav-container">
                <h4><Link to="/">Fantastisch blogplatform</Link></h4>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}>Home</NavLink></li>
                    <li><NavLink to="/blog" className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}>Blog Overzicht</NavLink></li>
                    <li><NavLink to="/login" className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}>Login</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;