import React from "react";
import "../styles/scoreboard.css";

const Scoreboard = props => (
    <div className="y-center scoreboard">
        <div className="x-center">
            <h3>Status: {props.status}</h3>
        </div>
        <div className="row split scores">
            <h2>Score: {props.score}</h2>
            <h2>High Score: {props.high}</h2>
        </div>
    </div>
);

export default Scoreboard;