import React from 'react';
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand style={brandStyle}>Website Title</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav " className='d-flex justify-content-between'>
        <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <NavDropdown title={<UserDropdownTitle userName={"sample"} />}  id="user-dropdown">
            <NavDropdown.Item href="#">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#">Log out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const UserDropdownTitle = ({ userName }) => (
    <span className="align-items-center ">
      <Image src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" roundedCircle width={30} height={30} className="mr-2" />
      <span className='px-2'>{userName}</span>
    </span>
);
const brandStyle = {
    fontWeight: 'bold',
  fontSize: '32px',
  color: 'blue',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  transition: 'color 0.3s',
  cursor: 'pointer',
  
  // Custom background gradient
  background: 'linear-gradient(to right, #FFD700, #FF8C00)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  };

export default Header;
