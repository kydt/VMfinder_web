import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import {TableRow} from './TableRow.js';
import {TableHead} from './TableHead.js';
export {TableReact};

class TableReact extends Component {
  constructor(){
    super();
    this.rowIsSelected = this.rowIsSelected.bind(this);
    this.state = {
      classNameHere:'tableHere',
      rowSelected: false,
      rowSelectedId: -1,
      }
    }
  
  rowIsSelected(id){
    console.log('they equal: ' + this.state.rowSelectedId === id);
    console.log('row selected:' + this.state.rowSelected);
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

  getClName(num){
    if (this.state.rowSelected) {
      if (this.state.rowSelectedId === num) {
        return 'table-primary';
      }
    }
    return this.props.users[num].status == 'Busy' ? 'table-danger' : 'table-success';
  }
    
//name, leasee, status, notes
  render() {
    return (
      <tb responsive="lg" className="table table-hover">
        <thead className = 'thead-dark'>
          <TableHead/>
        </thead>
        <tfoot className = 'thead-dark'>
          <TableHead/>
        </tfoot>
        <tbody>
          {this.props.users.map( (singleUser, position) => <TableRow user = {singleUser}  selectThisRow = {this.rowIsSelected} givenClassName = {this.getClName(position)} id = {position} />) }
        </tbody>
      </tb>
    );
  }
}