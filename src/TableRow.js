import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
export {TableRow};

class TableRow extends Component {
  constructor(){
    super();
    this.selectRowHere = this.selectRowHere.bind(this);
    this.state = {
      classNameHere:'tableRow'
      }
  }

  selectRowHere(num){
    console.log('We ve got a click: ' + num + ' !');
    this.props.selectThisRow(num);
  }

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