import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
export {TableRow};

class TableRow extends Component {
  constructor(){
    super();
    this.state = {
      classNameHere:'tableRow'
      }
    }

//name, leasee, status, notes
  render() {
    return (
      <tr className = {this.props.user.status == "Busy" ? "table-danger" : "table-success" }>
        <td scope="row">{this.props.user.name}</td>
        <td>{this.props.user.leasee}</td>
        <td>{this.props.user.status}</td>
        <td>{this.props.user.notes}</td>
      </tr>
    );
  }
}