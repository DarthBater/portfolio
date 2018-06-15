import React, { Component } from 'react';
import Bubble from './Bubble.js';
import './css/Header.css';

class Header extends Component{
  constructor(props){
    super(props);

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver(e){
    this.props.changeBubble(e.currentTarget.id);
  }

  handleMouseOut(e){
    this.props.changeBubble("");
  }


  render(){
    return(
      <div className="Header">
        <div className="shadow">
          <h1>Ryan Bates</h1>
          <h2>Developer</h2>
          <div className="Header-icons">
            <a id="CodePen" href="https://codepen.io/EnergyTurtle/" onMouseOver={this.handleMouseOver} onMouseOut={(this.handleMouseOut)}>
              <i className="fa fa-codepen"></i>
            </a>
            <a id="GitHub" href="https://github.com/DarthBater" onMouseOver={this.handleMouseOver} onMouseOut={(this.handleMouseOut)}>
              <i className="fa fa-github"></i>
            </a>
            <a id="LinkedIn" href="https://www.linkedin.com/in/ryan-bates-a62520144/" onMouseOver={this.handleMouseOver} onMouseOut={(this.handleMouseOut)}>
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
        <Bubble bubbleUrl={this.props.bubbleUrl} bubble={this.props.bubble}/>
      </div>
    )
  }
}

export default Header;
