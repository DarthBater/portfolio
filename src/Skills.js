import React, { Component } from 'react';
import './css/Skills.css';
import Languages from './Languages.js';

const languages = [{
  imgUrl: "https://www.dl.dropboxusercontent.com/s/sjl1ojgn26hl1q1/javalogo.png?dl=0",
  siteUrl: "https://www.java.com/en/"
},{
  imgUrl: "https://www.dl.dropboxusercontent.com/s/wv2qlrz36x2sqz4/csharplogo.png?dl=0",
  siteUrl: "https://docs.microsoft.com/en-us/dotnet/csharp/"
},{
  imgUrl: "https://www.dl.dropboxusercontent.com/s/jpujoxb1ehv5ld3/c-logo.png?dl=0",
  siteUrl: "https://www.cprogramming.com/"
},{
  imgUrl: "https://www.dl.dropboxusercontent.com/s/n0b82ie3rqv047l/jslogo.png?dl=0",
  siteUrl: "https://www.javascript.com/"
}];

const webTools = [{
  imgUrl: "https://www.dl.dropboxusercontent.com/s/pz6uwzdlawy8rml/reactlogo.png?dl=0",
  siteUrl: "https://reactjs.org/"
},{
  imgUrl: "https://www.dl.dropboxusercontent.com/s/ct8bu2rbjmeeytu/html5%20logo.png?dl=0",
  siteUrl: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
},{
  imgUrl: "https://www.dl.dropboxusercontent.com/s/2y9m60yrbr4zwhg/CSS3.png?dl=0",
  siteUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3"
},{
  imgUrl: "https://www.dl.dropboxusercontent.com/s/akjh20e0iulunm9/jQuery%20logo.gif?dl=0",
  siteUrl: "https://jquery.com/"
},{
  imgUrl: "https://www.dl.dropboxusercontent.com/s/40g5pe072h98m3i/sass%20logo.png?dl=0",
  siteUrl: "https://sass-lang.com/"
}];

class Skills extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const langPack = languages.map( (i) =>{
      return(
          <Languages
            profilePic={this.props.profilePic}
            changeBubbleUrl={this.props.changeBubbleUrl}
            imgUrl={i.imgUrl}
            siteUrl={i.siteUrl}
          />
      )
    });

    const webToolPack = webTools.map( (i) =>{
      return(
        <Languages
          profilePic={this.props.profilePic}
          changeBubbleUrl={this.props.changeBubbleUrl}
          imgUrl={i.imgUrl}
          siteUrl={i.siteUrl}
        />
      )
    })

    return(
      <div className="skills-container">
        <h5 className="skills-title">Languages:</h5>
        <div className="skills-img-container">
          {langPack}
        </div>
        <h5 className="skills-title">WebDev Tools:</h5>
        <div className="skills-img-container">
          {webToolPack}
        </div>
      </div>
    )
  }
}

export default Skills;
