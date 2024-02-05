import React from "react";
// import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import "../styles/AdminDashboard.css";
import PlayerList from "../components/PlayerList";

function AdminDashboard() {
    return (
        <div>
            <Header />
            <PlayerList />
        </div>
    );
}

export default AdminDashboard;
