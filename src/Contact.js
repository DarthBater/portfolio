import React, { Component } from 'react';
import './css/Contact.css';

class Contact extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="Contact">
        <h5>Contact Me:</h5>
        <div className="contact-info-container">
          <p className="contact-p"><strong>Email:</strong> Bates.384@osu.edu</p>
          <p className="contact-p"><strong>Phone:</strong> (740) 703-1463</p>
          <br />
          <p className="contact-p">Or you can visit me on <a href="https://github.com/DarthBater">
          <strong>GitHub</strong></a> or <a href="https://www.linkedin.com/in/ryan-bates-a62520144/">
          <strong>LinkedIn</strong></a></p>
        </div>
      </div>
    )
  }
}

export default Contact;
