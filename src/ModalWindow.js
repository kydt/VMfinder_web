import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
const ReactBootstrap = require("react-bootstrap");

var Button = ReactBootstrap.Button
var Input = ReactBootstrap.Input;
var Modal = ReactBootstrap.Modal;

class ModalWindow extends Component {
    constructor(){
    super();
    this.state = {
        showHere: false
    }
}

//name, leasee, status, notes
render() {
    return (
        <div>
            <Button onClick = { () => this.props.operateModal() }> OpenModal </Button>
            <Modal show = {this.props.showHere} onHide = {() => this.props.operateModal()}>
                <Modal.Header closeButton>
                    <Modal.Title id="modalTitle">Add new VM</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => console.log('Create')} bsStyle="primary" id="addButton" disabled>Add Recipe</Button>
                    <Button onClick={() => this.props.operateModal()}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
}

export {ModalWindow};