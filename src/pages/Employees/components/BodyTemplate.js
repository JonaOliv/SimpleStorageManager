import Button from 'react-bootstrap/Button';
import React from "react";

function BodyTemplate() {
    const products = [
        { "id":"125453345", "name":"John Inglesa", "state": "active"},
        { "id":"125453345", "name":"Sams Inglesa", "state": "active"},
        { "id":"125453345", "name":"Tomn Inglesa", "state": "active"}
    ];

    const productList = products.map((product) => 
        <tr>
            <td>{product.id}</td>
            <td>{product["name"]}</td>
            <td>{product["state"]}</td>
            <td><Button variant="warning">Update</Button></td>
        </tr>
    );

    return (
        <tbody>
            {productList}
        </tbody>
    );
}

export default BodyTemplate;