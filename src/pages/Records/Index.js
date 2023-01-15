import NavigatorBar from '../../components/NavigatorBar';
import TableTemplate from '../../components/TableTemplate';

import HeaderTemplate from './components/HeaderTemplate';
import BodyTemplate from './components/BodyTemplate';
import TableBar from './components/TableBar';

import React, { useState } from 'react';
import ModalTemplate from '../../components/ModalTemplate'
import FormModal from './components/FormModal'
import Button from 'react-bootstrap/Button';

function Records() {
  const [show, setShow] = useState(false);

  const [modalTitle, setModalTitle] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    setModalTitle("Record: " + event.target.id);
    setShow(true);
  };

  const product = { 
    "idRecord":"125453345", "idEmployee":"25252525","nameEmployee":"John Hammer", 
    "idProduct":"75757575", "nameProduct":"Llave Inglesa", "inOrOut": "out", 
    "datetime":"2022/12/10 09:22:55", "description":"hello world!"
  };

  const disabled = "disabled";

  return (
    <div>
      <NavigatorBar/>
      <TableBar/>
      <TableTemplate header={<HeaderTemplate/>} body={<BodyTemplate handleShow={handleShow}/>}/> 
      <ModalTemplate show={show} handleClose={handleClose} handleShow={handleShow} 
        body={<FormModal disabled={disabled}>{product}</FormModal>} title={modalTitle} 
        footer={<Button variant="primary" onClick={handleClose}>Close</Button>}
      />
    </div>
  );
  
}
  
export default Records;