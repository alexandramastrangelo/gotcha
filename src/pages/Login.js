// Login.js
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import "../styles/Login.css"; // Assuming you have a CSS file for styling

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here (e.g., sending data to a server)
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <>
            <div>
                <Header></Header>
            </div>
            <div className="login">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    );
}

export default Login;
