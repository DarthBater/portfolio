import React, { Component } from 'react';
import './css/Bubble.css';

const profilePic= {
  backgroundColor: "#000",
  backgroundImage: 'url("https://www.dl.dropboxusercontent.com/s/uanr6t39nej644c/ProfilePic.jpg?dl=0")',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
};

const linkBubble={
  backgroundColor: '#ff97a5'
};

class Bubble extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="Bubble-img-container">
        <div className="Bubble-bubble" style={(this.props.bubble === "" ? profilePic : linkBubble)}>
          <h3>{this.props.bubble}</h3>
        </div>
      </div>
    )
  }
}

export default Bubble;
