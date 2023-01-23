import React from "react";
import Table from 'react-bootstrap/Table';

import DataTable from 'react-data-table-component';

function TableTemplate(props) {
    return (
        <div>
        <Table striped>
        {props.header}
        {props.body}
        </Table>
        </div>
    );
}

export default TableTemplate;
