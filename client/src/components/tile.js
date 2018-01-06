import React from "react";
import "../styles/tile.css";

const Tile = props => (
    <div className={"tile split"} {...props}>
        <span>THIS IS A TILE</span>
        <h3>{props.image}</h3>
        <h4>{props.cardNum}</h4>
    </div>
);


export default Tile;