import React, { Component } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

class TableRow extends Component {
  //name, leasee, status, notes
  render() {
    return (
      <tr 
      onClick = { () => this.props.selectThisRow(this.props.id) }
      className = {this.props.givenClassName}
      >
        <th scope='row'>{this.props.Vm.name}</th>
        <td>{this.props.Vm.leasee}</td>
        <td>{this.props.Vm.status}</td>
        <td>{this.props.Vm.notes}</td>
        <td>{this.props.id}</td>
      </tr>
    );
  }
}

export {TableRow};