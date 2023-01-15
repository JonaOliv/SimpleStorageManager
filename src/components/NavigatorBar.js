import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';


function NavigatorBar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/employees">Employees</Nav.Link>
            <Nav.Link as={Link} to="/inventory">Inventory</Nav.Link>
            <Nav.Link as={Link} to="/records">Records</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigatorBar;