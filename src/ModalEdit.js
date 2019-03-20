import React, { Component } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
//import {TableReact} from './TableReact.js';
const ReactBootstrap = require("react-bootstrap");

var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;

class ModalEdit extends Component {
    constructor(props){
        super(props);
        this.state = {
            errorState: false,
        }
    }
    
    editVm(){
        if (this.props.selectedVm.name === '') {
            this.setState( { errorState: true } );
            return;    
        }
        let currentVm = {
            name: this.props.selectedVm.name,
            leasee: this.props.selectedVm.leasee,
            status: this.props.selectedVm.status,
            notes: this.props.selectedVm.notes,
        }
        this.props.editVm(currentVm, this.props.selectedVmId);
        this.props.operateModal();
    }

    init(){

    }

    errorMessage(){
        if(this.state.errorState){ return (<div className = 'form-text text-danger small'> Vm name is required </div>); }
        return null;
    }

    changeInputName(value){
        this.props.changeSelectedVM(
            {
                name: value,
                leasee: this.props.selectedVm.leasee,
                status: this.props.selectedVm.status,
                notes: this.props.selectedVm.notes,
            }
        );
    }

    changeInputLeasee(value){
        this.props.changeSelectedVM(
            {
                name: this.props.selectedVm.name,
                leasee: value,
                status: this.props.selectedVm.status,
                notes: this.props.selectedVm.notes,
            }
        );
    }
    
    changeInputStatus(value){
        this.props.changeSelectedVM(
            {
                name: this.props.selectedVm.name,
                leasee: this.props.selectedVm.leasee,
                status: value,
                notes: this.props.selectedVm.notes,
            }
        );
    }
    
    changeInputNotes(value){
        this.props.changeSelectedVM(
            {
                name: this.props.selectedVm.name,
                leasee: this.props.selectedVm.leasee,
                status: this.props.selectedVm.status,
                notes: value,
            }
        );
    }



//name, leasee, status, notes
    render() {
        return (
            <div>
                <Modal show = {this.props.showHere} onHide = {() => this.props.operateModal()}>
                    <Modal.Header closeButton>
                        <Modal.Title id="modalTitle">Edit VM</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                        <div className = "form-group row">
                            <label form = "inputName" className = "col-sm-2 col-form-label">Name</label>
                            <div className = "col-sm-10">
                                <input type="text" className = "form-control" id="inputName" placeholder="Type Name Here"               
                                    value = {this.props.selectedVm.name}
                                    onChange={(e)=> this.changeInputName(e.target.value)}/>
                            </div>
                            {this.errorMessage()}
                        </div>
                        <div className = "form-group row">
                            <label form = "Leasee" className = "col-sm-2 col-form-label">Leasee</label>
                            <div className = "col-sm-10">
                                <input type="text" className = "form-control" id="Leasee" placeholder="Choose leasee"
                                 value = {this.props.selectedVm.leasee}
                                 onChange={(e)=> this.changeInputLeasee(e.target.value)}/>
                            </div>
                        </div>
                        <div className = "form-group row">
                            <label form = "Status" className = "col-sm-2 col-form-label">Status</label>
                            <div className = "col-sm-10">
                                <input type="text" className = "form-control" id="Status" placeholder="Choose Status"
                                 value = {this.props.selectedVm.status}
                                 onChange={(e)=> this.changeInputStatus(e.target.value)}/>
                            </div>
                        </div>
                        <div className = "form-group row">
                            <label form = "Notes" className = "col-sm-2 col-form-label">Notes</label>
                            <div className = "col-sm-10">
                                <input type="text" className = "form-control" id="Notes" placeholder="Type Notes Here"
                                 value = {this.props.selectedVm.notes}
                                 onChange={(e)=> this.changeInputNotes(e.target.value)}/>
                            </div>
                        </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.editVm()} bsstyle="primary" id="editButton">Edit VM</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export {ModalEdit};