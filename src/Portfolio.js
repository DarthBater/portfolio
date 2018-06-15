import React, { Component } from 'react';
import './css/Portfolio.css';

class Portfolio extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="portfolio-container">
        <div className="portfolio-card">
          <div className="portfolio-image-container">
            <img class="display-img" src="https://www.dl.dropboxusercontent.com/s/pnhuqnysb7s93ur/guitarscales-thumbnail.jpg?dl=0"/>
          </div>
          <p className="item-description">
          <h6 className="portfolio-title">The Guitar Scale Generator  </h6>  was the
          first project I made after finishing school. I consider it my first <em>true</em> experience
          with web development. I dove in head first and let whatever semblence of an idea of how JavaScript
          worked I had drive itself to completion. It is definitely ugly, and the code is even uglier, but it
          works. This project showed me how little I know about frontend development. A light came on that said,
          "Man, I want to learn how to do this"<br /><br />
          I play the guitar and I was having trouble finding a resource online that would allow me to see
          the triads of a given chord. Knowing your triads and all the inversions of it really helps with
          improvisation. This application allows me to do that.
          <br /><br />
          <h6 className="portfolio-title">Technologies Used:</h6>
          <br />
          This is all done in vanilla JavaScript. I didn't use any CSS preprocessors either. I did refactor it on <em>CodePen</em> using
          React and it looks a lot nicer, though I haven't yet implemented the triad feature.
          </p>
        </div>
      </div>
    )
  }
}

export default Portfolio;
