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
    this.pageDecrease = this.pageDecrease.bind(this);
    this.pageIncrease = this.pageIncrease.bind(this);
    this.pageNavigation = this.pageNavigation.bind(this);
    this.changeSelectedVM = this.changeSelectedVM.bind(this);
    this.returnEmptyVm = this.returnEmptyVm.bind(this);
    this.renderUser = this.renderUser.bind(this);
    this.getUser = this.getUser.bind(this);
    this.state = {
      //rowSelected: false,
      rowSelectedId: -1,
      showModalNew: false,
      showModalEdit: false,
      showModalDelete: false,
      currentPage:1,
      selectedVm: {
        name:'',
        leaseeId:'',
        status:'',
        notes:'',
      },
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
  
  changeSelectedVM = (childVm) => { this.setState({selectedVm: childVm}); }
  
  handleChangeNew = () => { this.setState({showModalNew: !this.state.showModalNew}); }
  
  handleChangeEdit = () => { this.setState({showModalEdit: !this.state.showModalEdit}); }
  
  handleChangeDelete = () => { this.setState({showModalDelete: !this.state.showModalDelete});  }
  
  pageIncrease = () => {this.setState({ currentPage: this.state.currentPage + 1 });}
 
  pageDecrease = () => {this.setState({ currentPage: this.state.currentPage - 1 });}
  
  rowIsSelected(id){
    if ( this.state.rowSelectedId > -1 ) {
      if ( this.state.rowSelectedId === id + (this.state.currentPage - 1) * 10 ) {
        this.setState({
         // rowSelected: false,
          selectedVm: this.returnEmptyVm(),
        });
      }    
      else {
        this.setState({
          rowSelectedId: id + (this.state.currentPage - 1) * 10,
          selectedVm: this.props.Vms[id + (this.state.currentPage - 1) * 10],
        });
      }
    }
    else{
      this.setState({
        rowSelectedId: id + (this.state.currentPage - 1) * 10,
        //rowSelected: true,
        selectedVm: this.props.Vms[id + (this.state.currentPage - 1) * 10],
      });
    }
  }

  returnEmptyVm = () => { return {
    name:'',
    leaseeId:'',
    status:'',
    notes:'',
  }}

  getUser = (userId) =>  { return  this.props.users.find( (user) => user.id === userId ) }

  renderUser = (userId) => {
    let user = this.getUser(userId);
    return user.first + ' ' + user.last;
  }
  
  getClassName(num){
      if (this.state.rowSelectedId === num + (this.state.currentPage - 1) * 10) {
        return 'table-primary';
      }
    return this.props.Vms[num].status === 'Busy' ? 'table-danger' : 'table-success';
  }

  pageNavigation(){
    const maxPages = Math.min(Math.ceil(this.props.maxNumber / 10) , 10);
    const pages = Array(maxPages);
    for(let i = 0; i < maxPages; i++) { pages[i] = i + 1; }
    return(
      <div className="btn-group mr-2" role="group" aria-label="First group">
        <button type="button" className = "btn btn-outline-primary" onClick ={() => this.pageDecrease()} disabled = {this.state.currentPage <= 1}>Previous</button>
        {pages.map( (num) => <button key = {num} type="button" className = { num === this.state.currentPage ? "btn btn-primary" : " btn btn-outline-primary"} onClick = {() => {this.setState({currentPage:num})} } >{num}</button> ) }
        <button type="button" className = "btn btn-outline-primary" onClick ={() => this.pageIncrease()} disabled = { this.state.currentPage * 10 > this.props.maxNumber}>Next</button>
      </div>
    );
  }
  
render() {
    return (
      <div  className = "table-responsive">
        <ButtonGroup onlyNewRow = { this.state.rowSelectedId < 0 } addModal = {this.handleChange}/>
        <table className="table table-hover responsive">
          <thead className = 'thead-dark'>
            <TableHead/>
          </thead>
          <tfoot className = 'thead-dark'>
            <TableHead/>
          </tfoot>
          <tbody>
            {this.props.Vms.slice( (this.state.currentPage - 1) * 10, this.state.currentPage * 10)
              .map( 
                (singleVm, position) => 
                <TableRow Vm = {singleVm}  selectThisRow = {this.rowIsSelected} givenClassName = {this.getClassName(position)} 
                id = {position} key = {position}  user = {this.renderUser(singleVm.leaseeId)}/>
                 ) 
            }
          </tbody>
        </table>
        {this.pageNavigation()}
        <ModalNew showHere = {this.state.showModalNew} operateModal = {this.handleChangeNew} createNewVm = {this.props.save}/>
        <ModalEdit showHere = {this.state.showModalEdit} operateModal = {this.handleChangeEdit} editVm = {this.props.save} changeSelectedVM = {this.changeSelectedVM} selectedVm = {this.state.selectedVm} selectedVmId = {this.state.rowSelectedId}/>
        <ModalDelete showHere = {this.state.showModalDelete} operateModal = {this.handleChangeDelete} deleteVm = {this.props.remove} selectedVmId = {this.state.rowSelectedId}/>

      </div>
    );
  }
}

export {TableReact};