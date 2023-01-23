import React from "react";
import Button from 'react-bootstrap/Button';

export default function getColumns(props) {
    const columns = [
        {
          name: 'ID Record',
          selector: row => row.idRecord,
          sortable: true,
        },
        {
          name: 'Id Employee',
          selector: row => row.idEmployee,
          sortable: true,
        },
        {
          name: 'Employee',
          selector: row => row.nameEmployee,
          sortable: true,
         },
        {
          name: 'ID Product',
          selector: row => row.idProduct,
          sortable: true,
        },
        {
            name: 'Product',
            selector: row => row.nameProduct,
            sortable: true,
        },
        {
            name: 'In Or Out',
            selector: row => row.inOrOut,
            sortable: true,
        },
        {
          name: 'Datetime',
          selector: row => row.datetime,
          sortable: true,
        },
        {
          name: 'Details',
          cell: row => <Button id={row.idRecord} variant="warning" onClick={props.handleShow}>See</Button>
        }
      ];

    return columns;
}