import React from "react";
import "../styles/tile.css";

const Tile = props => (
    <div className={"tile split"} {...props}>
        <img src={props.image} alt="tile"/>
    </div>
);


export default Tile;