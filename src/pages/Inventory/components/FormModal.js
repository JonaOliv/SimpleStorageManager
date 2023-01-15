import Form from 'react-bootstrap/Form';
import States from '../../../components/States';
import Tags from '../../../components/Tags';

function FormModal(props) {
    const disabled = props.disabled;

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formIdProduct">
                <Form.Label>Id Product</Form.Label>
                <Form.Control disabled={disabled} type="text" placeholder="Enter Id Product" value={props.children.idProduct}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formNameProduct">
                <Form.Label>Product Name</Form.Label>
                <Form.Control disabled={disabled} type="text" placeholder="Enter Product Name" value={props.children.nameProduct}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formState">
                <Form.Label>State</Form.Label>
                <States/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAmount">
                <Form.Label>Amount</Form.Label>
                <Form.Control disabled={disabled} type="number" placeholder="Enter Amount" value={props.children.amount}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTags">
                <Form.Label>Tags</Form.Label>
                <Tags/>
            </Form.Group>
        </Form>
    );
}


export default FormModal;