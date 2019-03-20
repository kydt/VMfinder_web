import React, { Component } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
const ReactBootstrap = require("react-bootstrap");

var Button = ReactBootstrap.Button
var Modal = ReactBootstrap.Modal;

class ModalEdit extends Component {
//name, leasee, status, notes
    render() {
        return (
            <div>
                <Modal show = {this.props.showHere} onHide = {() => this.props.operateModal()}>
                    <Modal.Header closeButton>
                        <Modal.Title id="modalTitle">Edit this VM</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => console.log('Edit VM')} bsStyle="primary" id="addButton" disabled>Edit VM</Button>
                        <Button onClick={() => this.props.operateModal()}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export {ModalEdit};