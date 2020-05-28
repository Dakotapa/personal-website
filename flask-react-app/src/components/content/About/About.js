import React from 'react';
import './About.css'
import Aboutpic from '../../../pictures/about.png'

function About() {

  return (
  	<div className="About">
        
            <img src={Aboutpic} alt="Dakota Palmer"/>

        <div className="Description">
            <h1> About Me </h1>
            <p>
                Welcome! My name is Dakota Palmer, a soon to be first generation 
                Native American computer science graduate from the University of 
                Southern California. I am also the father of two awesome little guys that 
                keep me striving to be the best that I can be.<br/> <br/>
                My passion is in cyber security and software engineering. My 
                lifelong goal is to learn as much as I can about the technologies 
                we interact with on a daily basis while hopefully one day, providing 
                solutions to the threats on our technological frameworks. <br/> <br/>
                Some of my non technical hobbies include working out, learning music
                production, researching game development, and playing first person 
                shooter games. <br/> <br/>
                Currently Learning: <br/> React, Flask, Software Security <br/> <br/>
            </p> 
        </div>
        	

  	</div>
  );
}

export default About;
