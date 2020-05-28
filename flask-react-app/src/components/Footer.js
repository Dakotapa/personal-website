import React from 'react';
import './Footer.css'
import { Navbar, Nav } from 'react-bootstrap';

import CopyRight from '../pictures/copyright.png'
function Footer() {

  return (
    	<Navbar bg="dark" className="header" variant="dark">
    		<Navbar.Brand id="footerCrText" href="">
          <img id="crImg" src={CopyRight} alt="cr icon" /> 2020 Dakota Palmer
        </Navbar.Brand>
      </Navbar>
  );
}
export default Footer;