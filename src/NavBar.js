import React, { Component } from 'react';
import './css/NavBar.css';
import About from './About.js';

const selected = {
  backgroundColor:  "#cfcfcf"
}

const notSelected = {
  backgroundColor: "#efefef"
}

class NavBar extends Component{
  constructor(props){
    super(props);

    this.state ={
      active: 'About'
    }

    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleNavClick(e){
    this.setState({active: e.currentTarget.id});
  }

  render(){
    return(
      <div className="NavBar">
        <div id="About" style={this.state.active === "About" ? selected : notSelected}className="navElement" onClick={this.handleNavClick}>
          <h4>About</h4>
        </div>
        <div id="Portfolio" style={this.state.active === "Portfolio" ? selected : notSelected} className="navElement" onClick={this.handleNavClick}>
          <h4>Portfolio</h4>
        </div>
        <div className="navSpacer">
        </div>
        <div id="Skills" style={this.state.active === "Skills" ? selected : notSelected} className="navElement" onClick={this.handleNavClick}>
          <h4>Skills</h4>
        </div>
        <div id="Contact" style={this.state.active === "Contact" ? selected : notSelected} className="navElement" onClick={this.handleNavClick}>
          <h4>Contact</h4>
        </div>
      </div>
    )
  }

}


export default NavBar;
