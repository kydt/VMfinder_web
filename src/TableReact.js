import React, { Component } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import {TableRow} from './TableRow.js';
import {TableHead} from './TableHead.js';
import {ModalNew} from './ModalNew.js';
import {ModalEdit} from './ModalEdit.js';
import {ModalDelete} from './ModalDelete.js';
import {ButtonGroup} from './ButtonGroup.js';

class TableReact extends Component {
  constructor(){
    super();
    this.rowIsSelected = this.rowIsSelected.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeNew = this.handleChangeNew.bind(this);
    this.handleChangeEdit = this.handleChangeEdit.bind(this);
    this.handleChangeDelete = this.handleChangeDelete.bind(this);
    this.state = {
      rowSelected: false,
      rowSelectedId: -1,
      showModalNew: false,
      showModalEdit: false,
      showModalDelete: false,
    }
  }
  
  handleChange(operation){
    switch(operation){
      case 'New':  this.handleChangeNew();
                break;
      case 'Edit': this.handleChangeEdit();
                break;
      case 'Delete': this.handleChangeDelete();
                break;
      default: console.log('Sorry, we found ' + operation + ' is not supported');
    }
  }

  handleChangeNew(){
    this.setState({
      showModalNew: !this.state.showModalNew,
    });
  }

  handleChangeEdit(){
    this.setState({
      showModalEdit: !this.state.showModalEdit,
    });
  }

  handleChangeDelete(){
    this.setState({
      showModalDelete: !this.state.showModalDelete,
    });
  }

  saveUser(user, id){

  }

  rowIsSelected(id){
    if ( this.state.rowSelected ) {
      if ( this.state.rowSelectedId === id ) {
        this.setState({
          rowSelected: false,
        });
      }    
      else {
        this.setState({
          rowSelectedId: id,
        });
      }
    }
    else{
      this.setState({
        rowSelectedId: id,
        rowSelected: true
      });
    }
    
  }
  
  getClassName(num){
    if (this.state.rowSelected) {
      if (this.state.rowSelectedId === num) {
        return 'table-primary';
      }
    }
    return this.props.users[num].status === 'Busy' ? 'table-danger' : 'table-success';
  }
  
  //name, leasee, status, notes
  render() {
    return (
      <div  className = "table-responsive">
        <ButtonGroup onlyNewRow = {!this.state.rowSelected} addModal = {this.handleChange}/>
        <br/>
        <tb className="table table-hover responsive">
          <thead className = 'thead-dark'>
            <TableHead/>
          </thead>
          <tfoot className = 'thead-dark'>
            <TableHead/>
          </tfoot>
          <tbody>
            {this.props.users.map( (singleUser, position) => <TableRow user = {singleUser}  selectThisRow = {this.rowIsSelected} givenClassName = {this.getClassName(position)} id = {position} />) }
          </tbody>
        </tb>
        <ModalNew showHere = {this.state.showModalNew} operateModal = {this.handleChangeNew} createNewUser = {this.props.save}/>
        <ModalEdit showHere = {this.state.showModalEdit} operateModal = {this.handleChangeEdit} user = {this.props.users[this.state.rowSelectedId]} editUser = {this.props.save}/>
        <ModalDelete showHere = {this.state.showModalDelete} operateModal = {this.handleChangeDelete} deleteUser = {this.props.remove}/>
      </div>
    );
  }
}

export {TableReact};