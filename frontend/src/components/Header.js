import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
const Header = () => {
  return (
    <Navbar bg='dark' expand='lg' variant='dark'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>E-SHOP</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <LinkContainer to='/cart'>
              <Nav.Link>
                <i class='fas fa-shopping-cart'></i>Cart
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to='/login'>
              <Nav.Link>
                <i class='fas fa-user-lock'></i>Sign In
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
