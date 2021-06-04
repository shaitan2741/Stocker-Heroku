import React, { useState } from 'react';
import {
Collapse,
Navbar,
NavbarToggler,
NavbarBrand,
Nav,
NavItem,
NavLink,
} from 'reactstrap';


const Header = (props) => {
const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);

return (
    <div >

    
{/* <canvas class="particles-js-canvas-el" width="2864" height="486" ></canvas> */}
    <Navbar className="navbar  navbar-dark "  expand="md">
        <NavbarBrand href="/"><div className="logo"></div></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar style={{color:'red'}}>
        <Nav className="ml-auto" navbar>
            <NavItem>
            <NavLink href="/home/" className="font">Home</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/market" className="font">Marketrack</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/predict" className="font">Stockfaq</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/about" className="font">About</NavLink>
            </NavItem>
        </Nav>
        </Collapse>
    </Navbar>
    <br />
    </div>
);
}

export default Header;