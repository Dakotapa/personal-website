import React from 'react';
import './Footer.css'
import { Navbar, Nav } from 'react-bootstrap';
import CopyRight from '../pictures/copyright.png'

function Footer() {

  return (
    	<Navbar bg="dark" variant="dark">
    		<Navbar.Brand id="footerCrText" href="">
    			<img id="crImg" src={ CopyRight }/> 
    			2020 Dakota Palmer
    		</Navbar.Brand>
          	<Nav className="ml-auto">
      			<Nav.Link>
            	</Nav.Link>
      		</Nav>
      	</Navbar>
  	);
}
export default Footer;