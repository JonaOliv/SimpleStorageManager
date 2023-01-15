import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import './styles/navbar.css'

function NavigatorBar() {
  return (
    <Navbar expand="lg" className='JO-navbar'>
      <Container>
        <Navbar.Brand className='JO-navbar-home' as={Link} to="/home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='JO-navbar-button' as={Link} to="/employees">Employees</Nav.Link>
            <Nav.Link className='JO-navbar-button' as={Link} to="/inventory">Inventory</Nav.Link>
            <Nav.Link className='JO-navbar-button' as={Link} to="/records">Records</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigatorBar;