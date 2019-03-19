import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
//import 'react-bootstrap/dist/react-bootstrap.js';
//import Modal from 'react-bootstrap/Modal';
var ReactBootstrap = require("react-bootstrap");


var Panel = ReactBootstrap.Panel, Accordion = ReactBootstrap.Accordion;
var Button = ReactBootstrap.Button, Input = ReactBootstrap.Input;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var Modal = ReactBootstrap.Modal;
var OverlayTrigger = ReactBootstrap.OverlayTrigger;
var ListGroup = ReactBootstrap.ListGroup,ListGroupItem = ReactBootstrap.ListGroupItem;

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
            <Button name = 'OpenModal' onClick = { () => this.props.operateModal() }/>
            <Modal show = {this.props.showHere} onHide = {() => this.handleClose()}/>
            </div>
    );
}
}

export {ModalWindow};