import React from 'react';
import {useNavigate} from "react-router-dom";

function Logout({auth, setAuth}) {
    const navigate = useNavigate();
    function signOut() {
        setAuth(false);
        navigate('/');
    }
    return (
        <main>
            <div className="container">
                <h1>Logout</h1>
                <p>Je moet ingelogd zijn om de blogs te kunnen bekijken, weet je zeker dat je wil uitloggen?</p>
                <p><button type="button" className="button" onClick={signOut}>Uitloggen</button></p>
            </div>
        </main>
    );
}

export default Logout;