import React from 'react';
import {useNavigate} from "react-router-dom";

function Login( {auth, setAuth} ) {
    const navigate = useNavigate();
    function signIn() {
        setAuth(true);
        navigate('/');
    }
    return (
        <main>
            <div className="container">
                <h1>Login</h1>
                <p>Je moet ingelogd zijn om de blogs te kunnen bekijken</p>
                <p><button type="button" className="button" onClick={signIn}>Inloggen</button></p>
            </div>
        </main>
    );
}

export default Login;