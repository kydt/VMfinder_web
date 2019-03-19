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
    this.state = {
      classNameHere:'tableHere'
      }
    }
    
//name, leasee, status, notes
  render() {
    return (
      <tb className="table table-hover">
        <thead className = 'thead-dark'>
          <TableHead/>
        </thead>
        <tfoot className = 'thead-dark'>
          <TableHead/>
        </tfoot>
        <tbody>
          {this.props.users.map( (singleUser) => <TableRow user = {singleUser}/>) }
        </tbody>
      </tb>
    );
  }
}