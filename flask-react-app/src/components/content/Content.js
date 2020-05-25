import React, { Component } from 'react';

import './Content.css'

import Jumbotron from 'react-bootstrap/Jumbotron'

import About from './About/About.js'
import Contact from './Contact/Contact.js'
import Coursework from './Coursework/Coursework.js'
import Education from './Education/Education.js'
import Projects from './Projects/Projects.js'
import Workexp from './Workexp/Workexp.js'

export default class Content extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		const {showAbout, showWorkexp, showEducation, showCoursework,
			   showProjects, showContact } = this.props;
		return (
		  	<div className="Content">
		  		{ showAbout && < About /> }
		  		{ showWorkexp && < Workexp /> }
		  		{ showEducation && < Education /> }
		  		{ showCoursework && < Coursework /> }
		  		{ showProjects && < Projects /> }
		  		{ showContact && < Contact /> }
		  	</div>
  );
	}
}