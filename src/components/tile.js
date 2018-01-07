import React from "react";
import "../styles/tile.css";

const Tile = props => (
    <div className={"tile"}>
        <img src={props.image} alt="tile" {...props}/>
    </div>
);


export default Tile;