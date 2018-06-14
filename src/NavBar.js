import React, { Component } from 'react';
import './css/NavBar.css';
import About from './About.js';
import Contact from './Contact.js';
import Skills from './Skills.js';
import Portfolio from './Portfolio.js';

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
      active: 'About',
    }

    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleNavClick(e){
    this.setState({active: e.currentTarget.id});
  }

  render(){
    return(
      <div>
        <div className="NavBar">
          <div id="About" style={this.state.active === "About" ? selected : notSelected} className={this.state.active === "About" ? "navElement": "navElement normal"} onClick={this.handleNavClick}>
            <h4>About</h4>
          </div>
          <div id="Portfolio" style={this.state.active === "Portfolio" ? selected : notSelected} className={this.state.active === "Portfolio" ? "navElement": "navElement normal"} onClick={this.handleNavClick}>
            <h4>Portfolio</h4>
          </div>
          <div className="navSpacer">
          </div>
          <div id="Skills" style={this.state.active === "Skills" ? selected : notSelected} className={this.state.active === "Skills" ? "navElement": "navElement normal"} onClick={this.handleNavClick}>
            <h4>Skills</h4>
          </div>
          <div id="Contact" style={this.state.active === "Contact" ? selected : notSelected} className={this.state.active === "Contact" ? "navElement": "navElement normal"} onClick={this.handleNavClick}>
            <h4>Contact</h4>
          </div>
        </div>
        <div className="content-container">
          {this.state.active === "About" ? <About /> : this.state.active === "Portfolio" ? <Portfolio /> : this.state.active === "Skills" ? <Skills />: <Contact />}
        </div>
      </div>
    )
  }

}


export default NavBar;
