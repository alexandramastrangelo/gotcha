import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminDashboard from "./pages/AdminDashboard";
import HowToPlay from "./pages/HowToPlay";
import Login from "./pages/Login"; // Import the Login component
import Register from "./pages/Register";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/how-to-play" element={<HowToPlay />} />
                <Route path="/register" element={<Register />} />
                {/* Other routes */}
            </Routes>
        </Router>
    );
}

export default App;
