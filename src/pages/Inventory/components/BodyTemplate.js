import Button from 'react-bootstrap/Button';
import React from "react";

function BodyTemplate(props) {
    const products = [
        { "id":"125453345", "name":"Llave Inglesa", "state": "Borrowed", "amount":"1", "tags":"office"},
        { "id":"125453345", "name":"Llave Inglesa", "state": "Borrowed", "amount":"1", "tags":"office"},
        { "id":"125453345", "name":"Llave Inglesa", "state": "Borrowed", "amount":"1", "tags":"office"}
    ];

    let btnDelete;

    const canDelete = () => { return true; };

    if (canDelete())
        btnDelete = <Button variant="danger" onClick={props.handleShowDelete}>Delete</Button>;

    const productList = products.map((product) => 
        <tr>
            <td>{product.id}</td>
            <td>{product["name"]}</td>
            <td>{product["state"]}</td>
            <td>{product["amount"]}</td>
            <td>{product["tags"]}</td>
            <td><Button variant="warning" onClick={props.handleShowUpdate}>Update</Button>{btnDelete}</td>
        </tr>
    );

    return (
        <tbody>
            {productList}
        </tbody>
    );
}

export default BodyTemplate;