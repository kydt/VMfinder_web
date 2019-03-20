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
  constructor(props){
    super(props);
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
      currentPage:1,
      maxPage:1,
      currentViewVmList: null,
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
    return this.props.Vms[num].status === 'Busy' ? 'table-danger' : 'table-success';
  }

  pageNavigation(){
    this.setState({
      currentViewVmList: this.props.Vms.slice(0,10),
      maxPage: Math.ceil(this.props.Vms.Lenght/10),
    });
    console.log(this.state.currentViewVmList);
    console.log(this.state.maxPage);
    return(
      <div className="btn-group mr-2" role="group" aria-label="First group">
        <button type="button" className = "btn btn-secondary">Previuos</button>
        <button type="button" className = "btn btn-secondary">2</button>
        <button type="button" className = "btn btn-secondary">3</button>
        <button type="button" className = "btn btn-secondary">Next</button>
      </div>
    );
  }
  
render() {
    return (
      <div  className = "table-responsive">
        <ButtonGroup onlyNewRow = {!this.state.rowSelected} addModal = {this.handleChange}/>
        <table className="table table-hover responsive">
          <thead className = 'thead-dark'>
            <TableHead/>
          </thead>
          <tfoot className = 'thead-dark'>
            <TableHead/>
          </tfoot>
          <tbody>
            {this.props.Vms.map( (singleVm, position) => <TableRow user = {singleVm}  selectThisRow = {this.rowIsSelected} givenClassName = {this.getClassName(position)} id = {position} key = {position}/>) }
          </tbody>
        </table>
        {this.pageNavigation}
        <ModalNew showHere = {this.state.showModalNew} operateModal = {this.handleChangeNew} createNewVm = {this.props.save}/>
        <ModalEdit showHere = {this.state.showModalEdit} operateModal = {this.handleChangeEdit} editVm = {this.props.save} currentVm = {this.props.Vms[this.state.rowSelectedId]} currentVmId = {this.state.rowSelectedId}/>
        <ModalDelete showHere = {this.state.showModalDelete} operateModal = {this.handleChangeDelete} deleteUser = {this.props.remove} currentVmId = {this.state.rowSelectedId}/>
      </div>
    );
  }
}

export {TableReact};