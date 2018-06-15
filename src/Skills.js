import React, { Component } from 'react';
import './css/Skills.css';
import Languages from './Languages.js';

const languages = [{
  imgUrl: "https://www.dl.dropboxusercontent.com/s/tdb59fgvctjfak4/javalogo.png?dl=0",
  siteUrl: "https://www.java.com/en/"
},{
  imgUrl: "https://www.dl.dropboxusercontent.com/s/8fbji8erw3gc356/csharplogo.png?dl=0",
  siteUrl: "https://docs.microsoft.com/en-us/dotnet/csharp/"
},{
  imgUrl: "https://www.dl.dropboxusercontent.com/s/vvx1glf24w5fyzp/c-logo.png?dl=0",
  siteUrl: "https://www.cprogramming.com/"
},{
  imgUrl: "https://www.dl.dropboxusercontent.com/s/5sstveccsk62r4l/jslogo.png?dl=0",
  siteUrl: "https://www.javascript.com/"
}];

const webTools = [{
  imgUrl: "https://www.dl.dropboxusercontent.com/s/pz6uwzdlawy8rml/reactlogo.png?dl=0",
  siteUrl: "https://reactjs.org/"
},{
  imgUrl: "https://www.dl.dropboxusercontent.com/s/drjw02ziiczhd07/html5%20logo.png?dl=0",
  siteUrl: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
},{
  imgUrl: "https://www.dl.dropboxusercontent.com/s/2y9m60yrbr4zwhg/CSS3.png?dl=0",
  siteUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3"
},{
  imgUrl: "https://www.dl.dropboxusercontent.com/s/jaf9e9vwvhpcjnf/jQuery%20logo.gif?dl=0",
  siteUrl: "https://jquery.com/"
},{
  imgUrl: "https://www.dl.dropboxusercontent.com/s/mlbcyvbnu8yiy58/sass%20logo.png?dl=0",
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
