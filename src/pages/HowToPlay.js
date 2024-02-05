import React from "react";
// import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import "../styles/HowToPlay.css";

function HowToPlay() {
    return (
        <div>
            <Header />
            <div className="how-to-play">
                <h2>How to Play</h2>
                <p>
                    Welcome to the game of Gotcha! This is a fun and exciting game where players try to eliminate each
                    other by completing various challenges. Here's how it works:
                </p>
                <ol>
                    <li>Sign up for the game and get assigned a target player.</li>
                    <li>Your goal is to complete a challenge assigned to you and eliminate your target.</li>
                    <li>Once you eliminate your target, you'll receive a new target to eliminate.</li>
                    <li>Keep eliminating targets until you become the last player standing!</li>
                </ol>
                <p>
                    Have fun playing Gotcha and may the best player win! If you have any questions or need assistance,
                    please contact the game administrators.
                </p>
            </div>
        </div>
    );
}

export default HowToPlay;
