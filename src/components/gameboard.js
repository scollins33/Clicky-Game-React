import React, { Component } from "react";
import "../styles/gameboard.css";

import Scoreboard from "./scoreboard";
import Tile from "./tile";
import Images from "../images/images";

class Gameboard extends Component {
    // initialization with state creation
    constructor () {
        super();

        this.state = {
            status: "Game started",
            currentScore: 0,
            highScore: 0,
            clickedIDs: [],
            cards: this.buildCards(),
        };
    }

    // create array of cards to be displayed
    buildCards () {
        let cards = [];

        Images.map((src, i) => {
            return cards.push(<Tile key={i} id={i} image={src} onClick={this.checkCard}/>);
        });

        return cards;
    }

    shuffleCards () {
        this.state.cards.sort(() => {return 0.5 - Math.random()});
    }

    checkHighScore () {
        const {currentScore, highScore} = this.state;
        return (currentScore + 1 > highScore) ? currentScore + 1 : highScore;
    }

    // callback to check if the card has been clicked
    checkCard = event => {

        if (this.state.clickedIDs.includes(event.target.id)) {
            // lose the game and reset the board
            this.setState({
                status: "Oh no, you clicked one you had already clicked! You lose!",
                currentScore: 0,
                clickedIDs: [],
            });
        } else {
            // increase score and add to the clicked IDs
            this.state.clickedIDs.push(event.target.id);
            // this.shuffleCards();

            this.setState({
                status: "Nice! You clicked a valid card!",
                currentScore: this.state.currentScore + 1,
                highScore: this.checkHighScore(),
            });

            this.shuffleCards();
        }
    };

    // render the cards and any game info
    render () {
        return (
            <div>
                <Scoreboard
                    status={this.state.status}
                    score={this.state.currentScore}
                    high={this.state.highScore}
                />

                <div className={"playArea split"}>
                    {this.state.cards}
                </div>
            </div>);
    }
}

export default Gameboard;