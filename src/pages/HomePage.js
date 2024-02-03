// Example: src/pages/HomePage.js
import React from "react";
// import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import "../styles/HomePage.css"; // Assuming you have a CSS file for styling

function HomePage() {
    return (
        <div>
            <Header />

            {/* <header className="header">
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
            </header> */}
            <main className="main-content">{/* Main content of your homepage goes here */}</main>
        </div>
    );
}

export default HomePage;
