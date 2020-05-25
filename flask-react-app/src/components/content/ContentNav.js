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

	render() {
		return (
	  	<div className="ContentNav">
	 		<ListGroup defaultActiveKey="#link1">

	 			<ListGroup.Item action href="#link1"
	 			onClick={() => this.handleChange("showAbout")}
	 			>
	 				About Me
	 			</ListGroup.Item>

	 			<ListGroup.Item action href="#link2"
				onClick={() => this.handleChange("showWorkexp")}
	 			>
	 				Work Experience
	 			</ListGroup.Item>

	 			<ListGroup.Item action href="#link3"
	 			onClick={() => this.handleChange("showEducation")}
	 			>
	 				Education
	 			</ListGroup.Item>

	 			<ListGroup.Item action href="#link4"
	 			onClick={() => this.handleChange("showCoursework")}
	 			>
	 				Relevant Coursework
	 			</ListGroup.Item>

	 			<ListGroup.Item action href="#link5"
	 			onClick={() => this.handleChange("showProjects")}
	 			>
	 				Projects
	 			</ListGroup.Item>

	 			<ListGroup.Item action href="#link6"
	 			onClick={() => this.handleChange("showContact")}
	 			>
	 				Contact Me
	 			</ListGroup.Item>

	 		</ListGroup>
	  	</div>
	  );		
	}
  
}

export default ContentNav;
