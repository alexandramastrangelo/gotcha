// src/components/Sidebar.js

import React from "react";

function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <a href="/admin/dashboard">Dashboard</a>
                </li>
                <li>
                    <a href="/admin/players">Players</a>
                </li>
                <li>
                    <a href="/admin/settings">Game Settings</a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
