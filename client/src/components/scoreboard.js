import React from "react";
import "../styles/scoreboard.css";

const Scoreboard = props => (
    <div className="row split y-center scoreboard">
        <span>Status: {props.status}</span>
        <span>Score: {props.score}</span>
        <span>High Score: {props.high}</span>
    </div>
);

export default Scoreboard;