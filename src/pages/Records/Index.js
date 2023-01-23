import NavigatorBar from '../../components/NavigatorBar';
import TableTemplate from '../../components/TableTemplate';

import HeaderTemplate from './components/HeaderTemplate';
import BodyTemplate from './components/BodyTemplate';
import TableBar from './components/TableBar';

import React, { useState } from 'react';
import ModalTemplate from '../../components/ModalTemplate'
import FormModal from './components/FormModal'
import Button from 'react-bootstrap/Button';

import DataTable from 'react-data-table-component';
import getColumns from "./hooks/getColumns";
import getRecords from "../../api/axios/record";

function Records(props) {
  const [show, setShow] = useState(false);

  const [modalTitle, setModalTitle] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    setModalTitle("Record: " + event.target.id);
    setShow(true);
  };

  const product = {};
  const disabled = "disabled";

  const title = "Records";
  const columns = getColumns(handleShow);
  const data = getRecords(0);
  const ExpandedComponent = ({ data }) => <p>{data.description}</p>;

  return (
    <div>
      <NavigatorBar currentPageNavbar={props.currentPageNavbar}/>
      <TableBar/>
      <DataTable 
        title={title}
        columns={columns}
        data={data}
        expandableRows
        expandableRowExpanded={row => row.description}
        expandableRowsComponent={ExpandedComponent}
        expandOnRowClicked
        expandOnRowDoubleClicked
        expandableRowsHideExpander
        pagination
      />

      <ModalTemplate show={show} handleClose={handleClose} handleShow={handleShow} 
        body={<FormModal disabled={disabled}>{product}</FormModal>} title={modalTitle} 
        footer={<Button variant="primary" onClick={handleClose}>Close</Button>}
      />
    </div>
  );
  
}
  
export default Records;