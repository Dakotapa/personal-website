import React from 'react';
import './ContentNav.css'

import ListGroup from 'react-bootstrap/ListGroup'

function ContentNav() {

  return (
  	<div className="ContentNav">
 		<ListGroup defaultActiveKey="#link1">
 			<ListGroup.Item action href="#link1">
 				About Me
 			</ListGroup.Item>
 			<ListGroup.Item action href="#link2">
 				Work Experience
 			</ListGroup.Item>
 			<ListGroup.Item action href="#link3">
 				Education
 			</ListGroup.Item>
 			<ListGroup.Item action href="#link4">
 				Relevant Coursework
 			</ListGroup.Item>
 			<ListGroup.Item action href="#link5">
 				Projects
 			</ListGroup.Item>
 			<ListGroup.Item action href="#link6">
 				Contact Me
 			</ListGroup.Item>
 		</ListGroup>
  	</div>
  );
}

export default ContentNav;
