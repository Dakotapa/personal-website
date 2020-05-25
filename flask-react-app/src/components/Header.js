import React from 'react';
import './Header.css'

import { Navbar, Nav } from 'react-bootstrap'

function Header() {

  return (
  	<div className="Header">
    	<Navbar bg="dark" variant="dark" fixed="top">
    		<Navbar.Brand href="#home">DakotaPalmer.Dev</Navbar.Brand>
    		<Nav className="ml-auto">
    			<Nav.Link href="#home">Git</Nav.Link>
    			<Nav.Link href="#home">LinkedIn</Nav.Link>
    			<Nav.Link href="#home">Insta</Nav.Link>
    		</Nav>
    	</Navbar>
    </div>
  );
}

export default Header;
