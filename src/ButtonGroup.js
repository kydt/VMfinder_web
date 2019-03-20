import React, { Component } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

class ButtonGroup extends Component {
//name, leasee, status, notes
render() {
  return (
    <div className="btn-group buttons" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary" onClick = {() => this.props.addModal('New')}>New</button>
        <button type="button" className="btn btn-primary" onClick = {() => this.props.addModal('Edit')} disabled = {this.props.onlyNewRow}>Edit</button>
        <button type="button" className="btn btn-primary" onClick = {() => this.props.addModal('Delete')} disabled = {this.props.onlyNewRow}>Delete</button>
      </div>
    );
  }
}

export {ButtonGroup};