import React, { Component } from 'react';
import './css/Languages.css';

class Languages extends Component{
  constructor(props){
    super(props);

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }


  handleMouseOver(e){
    this.props.changeBubbleUrl(this.props.imgUrl);
  }

  handleMouseOut(e){
    this.props.changeBubbleUrl(this.props.profilePic);
  }

  render(){
    return(
      <div className="img-container">
        <a href={this.props.siteUrl}>
          <img onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut} className="lang-img" src={this.props.imgUrl}/>
        </a>
      </div>
    )
  }
}

export default Languages;
