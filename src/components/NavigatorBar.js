import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import './styles/navbar.css'

function NavigatorBar(props) {

  return (
    <Navbar expand="lg" className='JO-navbar'>
      <Container>
        <Navbar.Brand className='JO-navbar-home' as={Link} to="/home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id="nav-employees" className={props.currentPageNavbar === 1 ? ('JO-navbar-button JO-navbar-button-toggled') : ('JO-navbar-button')} as={Link} to="/employees">Employees</Nav.Link>
            <Nav.Link id="nav-inventory" className={props.currentPageNavbar === 2 ? ('JO-navbar-button JO-navbar-button-toggled') : ('JO-navbar-button')}  as={Link} to="/inventory">Inventory</Nav.Link>
            <Nav.Link id="nav-records" className={props.currentPageNavbar === 3 ? ('JO-navbar-button JO-navbar-button-toggled') : ('JO-navbar-button')}  as={Link} to="/records">Records</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigatorBar;