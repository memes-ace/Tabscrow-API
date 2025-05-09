import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h1>Tabscrow AI</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/chatbot">Chatbot</Link></li>
                <li><Link to="/verification">Verification</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
