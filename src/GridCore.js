import React, { Component } from 'react';
import { render } from 'react-dom';
import {Hello} from './Hello.js';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
export {GridCore};

class GridCore extends Component {
  constructor(){
    super();
    this.state = {
      classNameHere:'gridCore'
      }
}

render() {
    return (
      <span className = {this.state.classNameHere}> Product {this.props.name}</span>
    );
  }
}
