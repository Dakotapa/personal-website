import React from 'react';
import './Header.css'

import { Navbar, Nav } from 'react-bootstrap'
import GitPic from '../pictures/git.png'
import InstaPic from '../pictures/insta.png'
import LinkedInPic from '../pictures/linkedin.png'
import ResumePdf from '../download/resume.pdf'

function Header() {
  return (
  	 <Navbar bg="dark" variant="dark">
    		<Navbar.Brand id="homeUrl" href="/">DakotaPalmer.Dev</Navbar.Brand>
    		<Nav className="ml-auto">
    			<Nav.Link href="https://www.github.com/Dakotapa" target="_blank">
            <img id="git" src={GitPic} alt="Github icon" />
          </Nav.Link>
    			<Nav.Link href="https://www.linkedin.com/in/dakotapa" target="_blank">
            <img id="linkedin" src={LinkedInPic} alt="Linkedin icon" />
          </Nav.Link>
    			<Nav.Link href="https://www.instagram.com/dakotaep" target="_blank">
            <img id="instapic" src={InstaPic} alt="Instagram icon" />
          </Nav.Link>
          <Nav.Link href={ResumePdf} target="_blank">
            Resume
          </Nav.Link>
    		</Nav>
    	</Navbar>
  );
}

export default Header;