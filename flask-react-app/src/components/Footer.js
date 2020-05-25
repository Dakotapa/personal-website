import React, { Component } from 'react';
import './Footer.css'
import classnames from "classnames";
import { Navbar, Nav } from 'react-bootstrap';


function Footer() {

  return (
  	<div className="Footer">
    	<Navbar bg="dark" variant="dark" fixed="bottom">
    		<Navbar.Brand href="#home">(C) 2020 Dakota Palmer</Navbar.Brand>
    
          <Nav className="ml-auto">
      			<Nav.Link href="#home">
              Dakotapalmer@gmail.com
            </Nav.Link>
      		</Nav>
      </Navbar>
    </div>
  );
}

export default Footer;


/*export default class Footer extends Component {
  constructor(props){
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };

  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {
    return (
      <Navbar 
        className={classnames("navbar", {
          "navbar--hidden": !this.state.visible 
        })}
           bg="dark" variant="dark"
           >
        <Navbar.Brand href="#home">(C) 2020 Dakota Palmer</Navbar.Brand>
    
          <Nav className="ml-auto">
            <Nav.Link href="#home">
              Dakotapalmer@gmail.com
            </Nav.Link>
          </Nav>
      </Navbar>
    );
  }
}
*/
