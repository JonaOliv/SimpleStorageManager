import Form from 'react-bootstrap/Form';

function FormModal(props) {
    const disabled = props.disabled;

    return (
        <Form>
        <Form.Group className="mb-3" controlId="formIdRecord">
            <Form.Label>Id Record</Form.Label>
            <Form.Control disabled={disabled} type="text" placeholder="Enter Id Record" value={props.children.idRecord}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formIdEmployee">
            <Form.Label>Id Employee</Form.Label>
            <Form.Control disabled={disabled} type="text" placeholder="Enter Id Employee" value={props.children.idEmployee}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formNameEmployee">
            <Form.Label>Employee Name</Form.Label>
            <Form.Control disabled={disabled} type="text" placeholder="Enter Employee Name" value={props.children.nameEmployee}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formIdProduct">
            <Form.Label>Id Product</Form.Label>
            <Form.Control disabled={disabled} type="text" placeholder="Enter Id Product" value={props.children.idProduct}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formNameProduct">
            <Form.Label>Product Name</Form.Label>
            <Form.Control disabled={disabled} type="text" placeholder="Enter Product Name" value={props.children.nameProduct}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formInOrOut">
            <Form.Label>In Or Out</Form.Label>
            <Form.Control disabled={disabled} type="text" placeholder="Enter In Or Out" value={props.children.inOrOut}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDatetime">
            <Form.Label>Datetime</Form.Label>
            <Form.Control disabled={disabled} type="datetime" placeholder="Enter Datetime" value={props.children.datetime}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control disabled={disabled} as="textarea" rows={2} value={props.children.description}/>
        </Form.Group>
      </Form>
    );
}


export default FormModal;