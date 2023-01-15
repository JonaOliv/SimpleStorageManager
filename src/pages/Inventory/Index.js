import NavigatorBar from '../../components/NavigatorBar';
import TableTemplate from '../../components/TableTemplate';

import HeaderTemplate from './components/HeaderTemplate';
import BodyTemplate from './components/BodyTemplate';
import TableBar from './components/TableBar';

import React, { useState } from 'react';
import ModalTemplate from '../../components/ModalTemplate'
import FormModal from './components/FormModal'
import Button from 'react-bootstrap/Button';

function Inventory(){
  const [show, setShow] = useState(false);

  const [modalTitle, setModalTitle] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    setModalTitle("Updating Product: " + event.target.id);
    setShow(true);
  };

  const handleShowUpdate = (event) => {
    handleShow(event);
  };

  const handleShowDelete = (event) => {
    handleShow(event);
    setModalTitle("Deleting Product: " + event.target.id);
  };

  const product = { 
    "id":"75757575", "nameProduct":"Llave Inglesa", "inOrOut": "out", 
    "datetime":"2022/12/10 09:22:55", "description":"hello world!"
  };

  const disabled = "disabled";

  return (
    <div>
      <NavigatorBar/>
      <TableBar/>
      <TableTemplate header={<HeaderTemplate/>} body={<BodyTemplate handleShowUpdate={handleShowUpdate} handleShowDelete={handleShowDelete}/>}/> 
      <ModalTemplate show={show} handleClose={handleClose} handleShow={handleShow} 
        body={<FormModal disabled={disabled}>{product}</FormModal>} title={modalTitle} 
        footer={<Button variant="primary" onClick={handleClose}>Close</Button>}
      />         
    </div>
  );
  
}
  
export default Inventory;