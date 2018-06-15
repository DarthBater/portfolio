import React, { Component } from 'react';
import './css/Bubble.css';

const linkBubble={
  backgroundColor: '#ff97a5'
};

class Bubble extends Component{
  constructor(props){
    super(props);
  }

  render(){

    const img= {
      backgroundColor: "#fff",
      backgroundImage: 'url("' + this.props.bubbleUrl + '")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };

    return(
      <div className="Bubble-img-container">
        <div className="Bubble-bubble" style={(this.props.bubble === "" ? img : linkBubble)}>
          <h3>{this.props.bubble}</h3>
        </div>
      </div>
    )
  }
}

export default Bubble;
