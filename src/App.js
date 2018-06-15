import React, { Component } from 'react';
import './css/App.css';
import Header from './Header.js';
import Bubble from './Bubble.js';
import NavBar from './NavBar.js';

const profilePic="https://www.dl.dropboxusercontent.com/s/uanr6t39nej644c/ProfilePic.jpg?dl=0";

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      bubble: "",
      bubbleUrl: profilePic
    };

    this.changeBubbleUrl = this.changeBubbleUrl.bind(this);
    this.changeBubble = this.changeBubble.bind(this);
  }

  changeBubble(str){
    this.setState({bubble: str});
  }

  changeBubbleUrl(str){
    this.setState({bubbleUrl: str});
  }

  render() {
    return (
      <div className="App">
        <Header bubbleUrl={this.state.bubbleUrl} changeBubble={this.changeBubble} bubble={this.state.bubble}/>
        <NavBar profilePic={profilePic} changeBubbleUrl={this.changeBubbleUrl}/>
      </div>
    );
  }
}

export default App;
