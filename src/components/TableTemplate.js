import React from "react";
import Table from 'react-bootstrap/Table';

function TableTemplate(props) {
    return (
        <Table striped>
        {props.header}
        {props.body}
        </Table>
    );
}

export default TableTemplate;
