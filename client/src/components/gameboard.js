import React, { Component } from "react";
import "../styles/gameboard.css";

import Tile from "./tile";

class Gameboard extends Component {
    // initialization with state creation
    constructor () {
        super();

        this.state = {
            currentScore: 0,
            clickedIDs: [],
        };
    }

    // create array of cards to be displayed
    buildCards () {
        let cards = [];

        for (let i = 0; i < 12; i++) {
            const thisCard = <Tile id={i} image={`some image ${i}`} num={i} cb={this.checkCard.bind(this)}/>;
            cards.push(thisCard);
        }

        return cards;
    }

    // callback to check if the card has been clicked
    checkCard (pID) {
        console.log(`checking Card ${pID}`);
        console.log(this.state.currentScore);
        console.log(this.state.clickedIDs);

        if (this.state.clickedIDs.includes(pID)) {
            // lose the game
            console.log('you lose');
        } else {
            // increase score and add to the clicked IDs
            // cards should get reshuffled by buildCards on new render() when setState is called

            this.state.clickedIDs.push(pID);
            this.setState({ currentScore: this.state.currentScore + 1 });
        }
    };

    // render the cards and any game info
    render () {
        const testText = <div className={"container"}>
                            <h1 className={"headliner"}>Current Score: {this.state.currentScore}</h1>
                            <h1 className={"headliner"}>Clicked Cards: {this.state.clickedIDs.join(` `)}</h1>
                        </div>;
        const newCards = this.buildCards();

        return [testText, newCards];
    }
}

export default Gameboard;