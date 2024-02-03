import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export const Header = () => {
    return (
        <header className="header">
            <h1>Gotcha</h1>
            <nav>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/how-to-play">How to Play</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
