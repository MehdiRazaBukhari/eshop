import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
const Header = () => {
  return (
    <Navbar bg='dark' expand='lg' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>Nutshop</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='#home'>
              <i class='fas fa-shopping-cart'></i>Cart
            </Nav.Link>
            <Nav.Link href='#link'>
              <i class='fas fa-user-lock'></i>Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
