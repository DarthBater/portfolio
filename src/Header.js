import React, { Component } from 'react';
import './Header.css';

class Header extends Component{

  render(){
    return(
      <div className="Header">
        <div className="shadow">
          <h1>Ryan Bates</h1>
          <div className="Header-icons">
            <i class="fa fa-codepen"></i>
            <i class="fa fa-github"></i>
          </div>
          <div class="Header-img-container">
            <div className="Header-img">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
