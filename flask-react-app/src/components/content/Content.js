import React, { Component } from 'react';

import './Content.css'
import About from './About/About.js'
import Contact from './Contact/Contact.js'
import Coursework from './Coursework/Coursework.js'
import Education from './Education/Education.js'
import Projects from './Projects/Projects.js'
import Workexp from './Workexp/Workexp.js'


export default class Content extends Component {

	ref = React.createRef();

	async componentDidMount() {
		const observer = new IntersectionObserver (
			([entry]) => {
				if(entry.intersectionRatio === 1) {
					this.props.onVisible()
				}
			},
			{
				root:null,
				rootMargin: '0px',
				threshold: 1.0,
			}
		);

		if (this.ref.current) {
			observer.observe(this.ref.current);
		}
	}

	render() {
		const {showAbout, showWorkexp, showEducation, showCoursework,
			   showProjects, showContact } = this.props;
		return (
		  	<div className= "contentParent"
		  		ref={this.ref}
		  	 >
				<div className="page">
		  		{ showAbout && < About /> }
		  		</div>
		  		<div className="page">
		  		{ showWorkexp && < Workexp /> }
		  		</div>
		  		<div className="page">
		  		{ showEducation && < Education /> }
		  		</div>
		  		<div className="page">
		  		{ showCoursework && < Coursework /> }
		  		</div>
		  		<div className="page">
		  		{ showProjects && < Projects /> }
		  		</div>
		  		<div className="page">		  		
		  		{ showContact && < Contact /> }
		  		</div>

		  	</div>
	);
	}
}