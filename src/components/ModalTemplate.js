import Modal from 'react-bootstrap/Modal';

function ModalTemplate(props) {
     return (
        <div>
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.body}</Modal.Body>
            <Modal.Footer>
                {props.footer}
            </Modal.Footer>
        </Modal>
       </div>
     );
}

export default ModalTemplate;