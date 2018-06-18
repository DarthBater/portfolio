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
          <h6 className="portfolio-title">The Guitar Scale Generator  </h6>  was my first go
          at web development. I saw a need for a guitar scale generator that could show me the triad and
          its inversions across the scale. Knowing the triad locations can have a big impact on improvisation. I have
          since improved this, though still incomplete, using the React framework. It is viewable from <em>CodePen</em>.
          <br /><br />
          <h6 className="portfolio-title">Technologies Used:</h6>
          <br />
          HTML, CSS, and vanilla JavaScript.
          (New iteration built using React)
          </p>
        </div>

        <div className="portfolio-card">
          <div className="portfolio-image-container">
            <img class="display-img" src="https://www.dl.dropboxusercontent.com/s/n9lfvurbochgi2g/MarioClone.png?dl=0"/>
          </div>
          <p className="item-description">
          <h6 className="portfolio-title">Mario Clone </h6> was built for CSE 3902 with a group of 4 people. We used SCRUM
          for our project methodology with 5 2-week sprints.
          <br /><br />
          <h6 className="portfolio-title">My Contributions:</h6><ul>
          <li>Added enemy, item, and block visuals and behavior animations</li>
          <li>Designed change state pattern</li>
          <li>Added music and sound effects for state change and collision</li>
          </ul>
          <br />
          <h6 className="portfolio-title">Technologies Used:</h6>
          <br />
          C# and Microsoft XNA framework
          </p>
        </div>

        <div className="portfolio-card">
          <div className="portfolio-image-container">
            <img class="display-img" src="https://www.dl.dropboxusercontent.com/s/f1y3fr4qkvpwz3u/quotemachine.png?dl=0"/>
          </div>
          <p className="item-description">
          <h6 className="portfolio-title">The Quote Machine </h6> is a single page application that provides a random
          famous quote with an ability to get a new quote, and provides a twitter intent link. This was my first exposure
          to using RESTful APIs.
          <br /><br />
          <h6 className="portfolio-title">Technologies Used:</h6>
          <br />
          JavaScript, jQuery, HTML, CSS.
          </p>
        </div>

        <div className="portfolio-card">
          <div className="portfolio-image-container">
            <img class="display-img" src="https://www.dl.dropboxusercontent.com/s/wf04xyu28bjv9kn/DrumMachine.png?dl=0"/>
          </div>
          <p className="item-description">
          <h6 className="portfolio-title">Drum Machine </h6> is simply a single page web application that allows
          you to make sounds with either your mouse or keyboard. This was my first time using React. I feel that this application
          gave me very useful practice thinking 'the React way' and gave me a deeper understanding of asynchronous processes.
          <br /><br />
          <h6 className="portfolio-title">Technologies Used:</h6>
          <br />
          React, Sass
          </p>
        </div>

        <div className="portfolio-card">
          <div className="portfolio-image-container">
            <img class="display-img" src="https://www.dl.dropboxusercontent.com/s/02cwvhk93brlws8/dudeweather.png?dl=0"/>
          </div>
          <p className="item-description">
          <h6 className="portfolio-title">Dude Weather </h6> was more practice using RESTful APIs returning JSON objects.
          This is an application that shows your current weather and allows you to search any location for the weather.
          <br /><br />
          <h6 className="portfolio-title">Technologies Used:</h6>
          <br />
          HTML, CSS, JavaScript, jQuery
          </p>
        </div>

        <div className="portfolio-card">
          <div className="portfolio-image-container">
            <img class="display-img" src="https://www.dl.dropboxusercontent.com/s/9eadum2s0bs39fo/WikiViewer.png?dl=0"/>
          </div>
          <p className="item-description">
          <h6 className="portfolio-title">Wikipedia Viewer </h6> is an application that allows you to type in a string
          in a search bar and returns Wikipedia articles related to that string. Though I had used APIs in the past, this
          project was the first in which I got some good practice using CSS animations.
          <br /><br />
          <h6 className="portfolio-title">Technologies Used:</h6>
          <br />
          HTML, CSS, JavaScript, jQuery
          </p>
        </div>
      </div>
    )
  }
}

export default Portfolio;
