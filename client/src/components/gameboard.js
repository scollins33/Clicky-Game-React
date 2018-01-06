import React, { Component } from "react";
import "../styles/gameboard.css";

import Scoreboard from "./scoreboard";
import Tile from "./tile";

class Gameboard extends Component {
    // initialization with state creation
    constructor () {
        super();

        this.state = {
            status: "Game started",
            currentScore: 0,
            clickedIDs: [],
            cards: this.buildCards(),
        };
    }

    // create array of cards to be displayed
    buildCards () {
        let cards = [];

        for (let i = 0; i < 12; i++) {
            const thisCard = <Tile key={i} id={i} image={`some image ${i}`} num={i} onClick={this.checkCard}/>;
            cards.push(thisCard);
        }

        return cards;
    }

    shuffleCards () {
        let currentOrder = this.state.cards.slice();
        let maxIndex = currentOrder.length - 1;
        let newOrder = [];
        let randLoc;

        while (maxIndex > -1) {
            // generate random location
            randLoc = Math.floor(Math.random() * maxIndex);

            // insert that random location in Current Order and place it into our new Array
            newOrder.push(currentOrder[randLoc]);

            // remove placed obj and decrement
            currentOrder.splice(randLoc, 1);
            maxIndex--;
        }

        return newOrder;
    }

    // callback to check if the card has been clicked
    checkCard = event => {

        if (this.state.clickedIDs.includes(event.target.id)) {
            // lose the game and reset the board
            this.setState({
                status: "Oh no, you clicked one you had already clicked! You lose!",
            });
        } else {
            // increase score and add to the clicked IDs
            // cards should get reshuffled by buildCards on new render() when setState is called
            this.state.clickedIDs.push(event.target.id);

            this.setState({
                status: "Nice! You clicked a valid card!",
                currentScore: this.state.currentScore + 1,
                cards: this.shuffleCards(),
            });

            // this.shuffleCards();
        }
    };

    // render the cards and any game info
    render () {
        return (
            <div>
                <Scoreboard
                    status={this.state.status}
                    score={this.state.currentScore}
                    clicked={this.state.clickedIDs}
                />

                <div className={"playArea"}>
                    {this.state.cards}
                </div>
            </div>);
    }
}

export default Gameboard;