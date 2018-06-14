import React, { Component } from 'react';
import './css/App.css';
import Header from './Header.js';
import Bubble from './Bubble.js';
import NavBar from './NavBar.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      bubble: ""
    };

    this.changeBubble = this.changeBubble.bind(this);
  }

  changeBubble(str){
    this.setState({bubble: str});
  }

  render() {
    return (
      <div className="App">
        <Header changeBubble={this.changeBubble} bubble={this.state.bubble}/>
        <Bubble bubble={this.state.bubble}/>
        <NavBar />
      </div>
    );
  }
}

export default App;
