import React, { Component } from "react";
import "../styles/tile.css";

class Tile extends Component {
    constructor (props) {
        super(props);

        this.id = props.id;

        this.state = {
            image: props.image,
            cardNum: props.num,
        }
    }

    // onClick event function to be attached to each card
    clickedMe = () => {
        console.log(`You clicked ${this.id}`);
        console.log(this);

        this.props.cb(this.id);
    };

    render () {
        return (
            <div className={"tile"} onClick={this.clickedMe}>
                <span>THIS IS A TILE</span>
                <h3>{this.state.image}</h3>
                <h4>{this.state.cardNum}</h4>
            </div>
        );
    }
}

export default Tile;