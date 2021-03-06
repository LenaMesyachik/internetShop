import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const CreateType = ({show, onHide}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder={'Enter name of type'}
                /></Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant= 'outline-danger' onClick={onHide}>Add</Button>
                <Button variant= 'outline-success' onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;