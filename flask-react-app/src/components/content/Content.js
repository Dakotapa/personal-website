import React from 'react';

import './Content.css'

import Jumbotron from 'react-bootstrap/Jumbotron'

import About from './About/About.js'
import Contact from './Contact/Contact.js'
import Coursework from './Coursework/Coursework.js'
import Education from './Education/Education.js'
import Projects from './Projects/Projects.js'
import Workexp from './Workexp/Workexp.js'

function Content() {

  return (
  	<div className="Content">
  		< About />
  		< Workexp />
  		< Education />
  		< Coursework />
  		< Projects />
  		< Contact />
  	</div>
  );
}

export default Content;
