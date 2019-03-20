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
        console.log('this.props: ' + this.props);
        console.log('props: ' + props);
        this.state = {
            name: '',
            Vm: this.initState(),
            errorState: false,
        }
    }

    initState(){
        return this.props.currentVm;
           // leasee: this.props.currentVm.leasee,
            //status: this.props.currentVm.status,
            //notes: this.props.currentVm.notes

    }

    
    editVm(){
        console.log(this.state.Vm);
        console.log(this.initState());
        return;
        if (this.state.name === '') {
            this.setState( { errorState: true } );
            return;    
        }
        this.setState( { errorState: false } );
        let currentVm = {
            name: this.state.name,
            leasee: this.state.leasee,
            status: this.state.status,
            notes: this.state.notes,
        }
        this.props.editVm(currentVm, this.props.currentVmId);
        this.props.operateModal();
    }

    errorMessage(){
        if(this.state.errorState){ return (<div className = 'form-text text-danger small'> Vm name is required </div>); }
        return null;
    }

    changeInputName(value){
        this.setState( { name: value } );
    }

    changeInputLeasee(value){
        this.setState( { leasee: value } );
    }
    
    changeInputStatus(value){
        this.setState( { status: value } );
    }
    
    changeInputNotes(value){
        this.setState( { notes: value } );
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
                            <label for="inputName" className = "col-sm-2 col-form-label">Name</label>
                            <div className = "col-sm-10">
                                <input type="text" className = "form-control" id="inputName" placeholder="Type Name Here"               
                                    value = {this.state.name}
                                    onChange={(e)=> this.changeInputName(e.target.value)}/>
                            </div>
                            {this.errorMessage()}
                        </div>
                        <div className = "form-group row">
                            <label for="Leasee" className = "col-sm-2 col-form-label">Leasee</label>
                            <div className = "col-sm-10">
                                <input type="text" className = "form-control" id="Leasee" placeholder="Choose leasee"
                                 value = {this.state.leasee}
                                 onChange={(e)=> this.changeInputLeasee(e.target.value)}/>
                            </div>
                        </div>
                        <div className = "form-group row">
                            <label for="Status" className = "col-sm-2 col-form-label">Status</label>
                            <div className = "col-sm-10">
                                <input type="text" className = "form-control" id="Status" placeholder="Choose Status"
                                 value = {this.state.status}
                                 onChange={(e)=> this.changeInputStatus(e.target.value)}/>
                            </div>
                        </div>
                        <div className = "form-group row">
                            <label for="Notes" className = "col-sm-2 col-form-label">Notes</label>
                            <div className = "col-sm-10">
                                <input type="text" className = "form-control" id="Notes" placeholder="Type Notes Here"
                                 value = {this.state.notes}
                                 onChange={(e)=> this.changeInputNotes(e.target.value)}/>
                            </div>
                        </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.editVm()} bsstyle="primary" id="addButton">Edit VM</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export {ModalEdit};