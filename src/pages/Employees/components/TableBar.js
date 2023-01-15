import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React, { useState } from 'react';
import FormModal from './FormModal'
import ModalTemplate from '../../../components/ModalTemplate';

function TableBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const modalTitle = "New Employee";

  const product = {};

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Button variant="success" onClick={handleShow}>Add</Button>
            </Nav>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
        { <ModalTemplate 
          show={show} handleClose={handleClose} handleShow={handleShow} title={modalTitle} 
          body={<FormModal>{product}</FormModal>}
          footer={
            <div>
              <Button variant="primary" onClick={handleClose}>Submit</Button>
              <Button variant="default" onClick={handleClose}>Cancel</Button>
            </div>
          }
        />}
      </Container>
    </Navbar>
  );
}

export default TableBar;