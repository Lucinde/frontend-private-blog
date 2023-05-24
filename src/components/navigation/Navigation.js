import React from 'react';
import './Navigation.css';
import {Link, NavLink, useNavigate} from "react-router-dom";

function Navigation( {auth, setAuth} ) {
    return (
        <nav>
            <div className="nav-container">
                <h4><Link to="/">Fantastisch blogplatform</Link></h4>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}>Home</NavLink></li>
                    <li><NavLink to="/blog" className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}>Blog Overzicht</NavLink></li>
                    { !auth && <li><NavLink to="/login" className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}>Login</NavLink></li> }
                    { auth && <li><button type="button" className="button button-nav"><NavLink to="/logout" className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}>Uitloggen</NavLink></button></li>}
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;