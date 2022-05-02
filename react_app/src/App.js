import React from 'react';
import SignIn from "./components/SignIn";
import LogIn from "./components/LogIn";
import Api from "./components/Api";
import {Routes, Route, Link} from 'react-router-dom'

function App() {
    return (
        <>
        <header>
            <Link to="/login">Log In</Link>
            <p></p>
            <Link to="/signin">Sign In</Link>
            <p></p>
            <Link to="/api">Api</Link>
        </header>
        <Routes>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/api" element={<Api/>}/>
        </Routes>
        </>
)
    ;
}

export default App;
