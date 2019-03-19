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
        <button type="button" className="btn btn-primary">New</button>
        <button type="button" className="btn btn-primary">Edit</button>
        <button type="button" className="btn btn-primary">Delete</button>
      </div>
    );
  }
}