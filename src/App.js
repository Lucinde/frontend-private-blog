import React, {useState} from 'react';
import './App.css';
import Navigation from "./components/navigation/Navigation";
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Login from "./pages/login/Login";
import Blogpost from "./pages/blogpost/Blogpost";
import PrivateRoute from "./components/PrivateRoute";
import Logout from "./pages/logout/Logout";

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <>
            <Navigation auth={isAuthenticated} setAuth={toggleIsAuthenticated} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<PrivateRoute auth={isAuthenticated}> <Blog/> </PrivateRoute> } />
                <Route path="/login" element={<Login auth={isAuthenticated} setAuth={toggleIsAuthenticated}  />} />
                <Route path="/logout" element={<Logout auth={isAuthenticated} setAuth={toggleIsAuthenticated}  />} />
                <Route path="/blog/:id" element={<PrivateRoute auth={isAuthenticated}><Blogpost /></PrivateRoute>}/>
                {/*Manier zonder private route:*/}
                {/*<Route path="/blog" element={ isAuthenticated ? <Blog/> : <Navigate to="/login"/> } />*/}
                {/*<Route path="/blog/:id" element={ isAuthenticated ? <Blogpost /> : <Navigate to="/login"/>}/>*/}
            </Routes>
        </>
    );
}

export default App;