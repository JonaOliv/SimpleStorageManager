import Button from 'react-bootstrap/Button';
import React from "react";

function BodyTemplate(props) {
    const records = [
        { 
            "id":"125453345", "id_emp":"25252525","name_emp":"John Hammer", 
            "id_pro":"75757575", "name_pro":"Llave Inglesa", "inOrOut": "out", 
            "datetime":"2022/12/10 09:22:55"
        },
        { 
            "id":"125453346", "id_emp":"25252525","name_emp":"John Hammer", 
            "id_pro":"75757575", "name_pro":"Llave Inglesa", "inOrOut": "out", 
            "datetime":"2022/12/10 09:22:55"
        },
        { 
            "id":"125453347", "id_emp":"25252525","name_emp":"John Hammer", 
            "id_pro":"75757575", "name_pro":"Llave Inglesa", "inOrOut": "out", 
            "datetime":"2022/12/10 09:22:55"
        }
    ];

    const productList = records.map((product) => 
        <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product["id_emp"]}</td>
            <td>{product["name_emp"]}</td>
            <td>{product["id_pro"]}</td>
            <td>{product["name_pro"]}</td>
            <td>{product["inOrOut"]}</td>
            <td>{product["datetime"]}</td>
            <td><Button id={product.id} variant="warning" onClick={props.handleShow}>See</Button></td>
        </tr>
    );

    return (
        <tbody>
            {productList}
        </tbody>
    );
}

export default BodyTemplate;