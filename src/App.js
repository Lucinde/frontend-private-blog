import React, {useState} from 'react';
import './App.css';
import Navigation from "./components/navigation/Navigation";
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Login from "./pages/login/Login";
import Blogpost from "./pages/blogpost/Blogpost";

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/login" element={<Login />} />
                <Route path="/blog/:id" element={<Blogpost />} />
            </Routes>
        </>
    );
}

export default App;