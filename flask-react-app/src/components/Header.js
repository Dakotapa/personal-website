import React from 'react';
import './Header.css'

import { Navbar, Nav } from 'react-bootstrap'
import GitPic from '../pictures/git.png'
import InstaPic from '../pictures/insta.png'
import LinkedInPic from '../pictures/linkedin.png'

function Header() {

  return (
  	 <Navbar bg="dark" variant="dark">
    		<Navbar.Brand href="#home">DakotaPalmer.Dev</Navbar.Brand>
    		<Nav className="ml-auto">
    			<Nav.Link href="www.github.com/Dakotapa"> <img id="git" src={GitPic} alt="Github icon" /></Nav.Link>
    			<Nav.Link href="#home"><img id="linkedin" src={LinkedInPic} alt="Linkedin icon" /></Nav.Link>
    			<Nav.Link href="#home"><img id="instapic" src={InstaPic} alt="Instagram icon" /></Nav.Link>
    		</Nav>
    	</Navbar>
  );
}

export default Header;
