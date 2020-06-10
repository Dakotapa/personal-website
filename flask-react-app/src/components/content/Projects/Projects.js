import React from 'react';
import './Projects.css'
import JavaProject from '../../../pictures/javaproject.gif'

function Projects() {

  return (
  	<div className="projects" id="projects">
        <h1>
          Projects
        </h1>
        <div className="javaProject">
            <img src={ JavaProject } alt="Java Project"/>
            <div className="projectDescription">
                <h3>
                  Java 2D Multiplayer Dragon Shooting Game
                </h3>
                <ul>
                    <li>
                      Utilizes Jave Swift Library for drawing graphics
                    </li>
                    <li> 
                      Communicates using UDP Socket Programming for client/server communication
                    </li>
                    <li>
                      Uses MySQL to save userid, password, kills and deaths
                    </li>
                    <li>
                      Github Link: www.github.com/Dakotapa/java-game
                    </li>
                </ul>
            </div>
        </div>
        <h3>
          More Projects Coming Soon!
        </h3>
  	</div>
  );
}

export default Projects;