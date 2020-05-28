import React, { Component } from 'react';
import './ContentNav.css'


import ListGroup from 'react-bootstrap/ListGroup'

class ContentNav extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.onContentNavChange(e);
	}

	scrollTo(name){
		window.location.hash(name);
	}
	render() {
		return (
	 		<ListGroup defaultActiveKey="#link1">
	 			<ListGroup.Item action href="#layout">
	 				About Me
	 			</ListGroup.Item>
	 			<ListGroup.Item action href="#experience">
	 				Work Experience
	 			</ListGroup.Item>
	 			<ListGroup.Item action href="#education">
	 				Education
	 			</ListGroup.Item>
	 			<ListGroup.Item action href="#coursework">
	 				Relevant Coursework
	 			</ListGroup.Item>
	 			<ListGroup.Item action href="#projects">
	 				Projects
	 			</ListGroup.Item>
	 			<ListGroup.Item action href="#contact">
	 				Contact Me
	 			</ListGroup.Item>
	 		</ListGroup>
	  	
	  );		
	}
  
}

export default ContentNav;
