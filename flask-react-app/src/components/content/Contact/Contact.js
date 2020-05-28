import React, { Component } from 'react';
import './Contact.css'

export default class Contact extends Component {  
  render(){
    return (
    	<div className="Contact" 
      id="contact" 
      >
          <h1>Contact Information</h1>
          <div className="description">
              <h3>
                  Email: Dakotapalmer@gmail.com<br/>
                  Phone: 310 987 3228
              </h3>
          </div>
          <div id="closingDiv">
          <h5>
          This sight was made using React, Flask, and is hosted on AWS EC2<br/>
          </h5>
          </div>
      </div>
    );
  }
}
