import React, { Component } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
const ReactBootstrap = require("react-bootstrap");

var Button = ReactBootstrap.Button
var Modal = ReactBootstrap.Modal;

class ModalNew extends Component {
    constructor(){
        super();
        this.state = {
            user: {
                    name:'',
                    leasee:'',
                    status:'',
                    notes:'',
                }
        }
      }

//name, leasee, status, notes
    render() {
        return (
            <div>
                <Modal show = {this.props.showHere} onHide = {() => this.props.operateModal()}>
                    <Modal.Header closeButton>
                        <Modal.Title id="modalTitle">Add new VM</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                        <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputEmail3" placeholder="Type Name Here"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="Leasee" class="col-sm-2 col-form-label">Leasee</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="Leasee" placeholder="Choose leasee"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Status</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputEmail3" placeholder="Choose Status"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Notes</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputEmail3" placeholder="Type Name Here"/>
                            </div>
                        </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.props.createNewUser(this.state.user,-1)} bsStyle="primary" id="addButton">Add VM</Button>
                        <Button onClick={() => this.props.operateModal()}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export {ModalNew};