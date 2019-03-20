import React, { Component } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

class TableRow extends Component {
  //name, leasee, status, notes
  render() {
    return (
      <tr 
      onClick = {() => this.props.selectThisRow(this.props.id) } 
      className = {this.props.givenClassName}
      >
        <th scope='row'>{this.props.user.name}</th>
        <td>{this.props.user.leasee}</td>
        <td>{this.props.user.status}</td>
        <td>{this.props.user.notes}</td>
        <td>{this.props.id}</td>
      </tr>
    );
  }
}

export {TableRow};