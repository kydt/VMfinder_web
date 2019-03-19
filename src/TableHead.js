import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import {TableRow} from './TableRow.js';
export {TableHead};

class TableHead extends Component {
  constructor(){
    super();
    this.state = {
      classNameHere:'tableHead'
      }
    }
    
//name, leasee, status, notes
  render() {
    return (
         <tr>
            <th scope="col">Name</th>
            <th scope="col">Leasee</th>
            <th scope="col">Status</th>
            <th scope="col">Notes</th>
          </tr>
     );
  }
}