import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NAVBAR = ({text,setText}) => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Universities</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home"></Nav.Link>
      <Nav.Link href="#features"></Nav.Link>
      <Nav.Link href="#pricing"></Nav.Link>
      <form action="">
          <input type="text" placeholder="Search" value={text} onChange={e=>setText(e.target.value)} />
      </form>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default NAVBAR
