import React, { Component } from 'react';
import './App.css';
import Header from "./components/header";
import Gameboard from "./components/gameboard";

class App extends Component {
  render() {
    return (
      <div>
          <Header />

          <Gameboard />

      </div>
    );
  }
}

export default App;
