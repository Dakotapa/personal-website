import React, { Component } from 'react';
import './Contact.css'
import $ from 'jquery'



export default class Contact extends Component {
  
  
  constructor(props){
    super(props);
    this.state = {
      
    };
  }
  componentDidMount(){/*
    const script = document.createElement("script");

    script.innerHTML = "console.log('TEST');" +
    "const div = document.getElementById('contact');" +
    "div.addEventListener('focusin', (event) => {console.log('Foxused');});"
    
    
    script.async=true;
    document.body.appendChild(script);*/
    
/*    if($('#contact').is(':visible'))
    {
      console.log('visible');
    }*/

  }
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
      </div>
    );
  }
}
