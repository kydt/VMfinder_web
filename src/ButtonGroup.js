import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
export {ButtonGroup};

class ButtonGroup extends Component {
  constructor(){
    super();
    this.state = {
      classNameHere:'button Group'
      }
    }

//name, leasee, status, notes
  render() {
    return (
      <div className="btn-group buttons" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary" onClick = {() => console.log('click New buton')}>New</button>
        <button type="button" className="btn btn-primary" disabled>Edit</button>
        <button type="button" className="btn btn-primary" disabled>Delete</button>
      </div>
    );
  }
}