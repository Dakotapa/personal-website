import React from 'react';
import './About.css'
import Aboutpic from '../../../pictures/aboutpic.jpg'

/*import Jumbotron from 'react-bootstrap/Jumbotron'*/

function About() {

  return (
  	<div className="About">
        
            <img src={Aboutpic} alt="Picture of Dakota Palmer"/>

        <div className="Description">
            <h1> About Me </h1>
            <p>
                Welcome! My name is Dakota Palmer, a recent computer 
                science graduate from the University of Southern California. 
                I am also a father of two young boys that I have kepy me 
                striving to be the best that I can be. <br/> <br/>
                My passion is in cyber security and tinkering with sotware 
                frameworks/applications. My lifelong goal is to learn as
                much as I can about the technologies we interact with on a 
                daily basis while hopefully one day, providing solutions to 
                 threats on our technological frameworks. <br/> <br/>Some of my non 
                 technical hobbies include working out, guitar, piano, and 
                 first person shooter games. <br/> <br/>
                 Current Tech: <br/> React, Flask, Software Security <br/> <br/>
            </p> 
        </div>
        	

  	</div>
  );
}

export default About;
