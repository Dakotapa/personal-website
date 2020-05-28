import React from 'react';
import './Footer.css'
import { Navbar, Nav } from 'react-bootstrap';


function Footer() {

  return (
    	<Navbar bg="dark" variant="dark">
    		<Navbar.Brand href="#home">(C) 2020 Dakota Palmer</Navbar.Brand>
    
          <Nav className="ml-auto">
      			<Nav.Link href="#home">
              Dakotapalmer@gmail.com
            </Nav.Link>
      		</Nav>
      </Navbar>
  );
}
export default Footer;