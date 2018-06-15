import React, { Component } from 'react';
import './css/About.css';

const footballDate = new Date(2018, 7, 25, 0, 0, 0);

class About extends Component{
  constructor(props){
    super(props);

    this.getDaysUntil= this.getDaysUntil.bind(this);
  }

  getDaysUntil(date){

    const ONE_DAY = 1000 * 60 * 60 * 24

    const date1_ms = new Date();
    const date2_ms = date.getTime()
    const difference_ms = Math.abs(date1_ms - date2_ms)

    return Math.round(difference_ms/ONE_DAY)
  }

  render(){

    const date = this.getDaysUntil(footballDate);

    return(
      <div className="About">
        <h5>I am a Developer</h5>
        <p class="About-intro">   and hobbyist and recent graduate of
        <strong> The Ohio State University</strong> with a degree in Computer Science.
         I am currently seeking an opportunity to take my passion for
         frontend development and design to the industry.
         </p>
         <br /><br /><br />
         <p class="About-intro">When I'm not spending my time learning new technologies
         I enjoy golfing, weightlifting, and watching sports (Only <strong>{date} days</strong> until football).
         I'm just now getting over the fact that I will never be on the PGA tour, so I've replaced my
         crushed, unrealistic dreams with tangible applications of my skillset and education.</p>
      </div>
    )
  }
}

export default About;
