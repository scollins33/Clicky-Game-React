import React, { Component } from "react";
import "../styles/gameboard.css";

import Tile from "./tile";

class Gameboard extends Component {
    constructor () {
        super();

        this.state = {
            test: "testVal"
        };
    }

    render () {
        return (
            <div className={"container"}>
                Gameboard Class Container
                <h1>{this.state.test}</h1>

                <Tile />
            </div>
        );
    }
}

export default Gameboard;