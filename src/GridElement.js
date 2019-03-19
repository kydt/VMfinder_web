import React, { Component } from 'react';
import { render } from 'react-dom';
import {Hello} from './Hello.js';
import './style.css';
import {GridCore} from './GridCore.js';
import 'bootstrap/dist/css/bootstrap.css';
export {GridElement};

class GridElement extends Component {
  constructor(){
    super();
    this.state = {
      classNameHere:'gridElement'
      }
    }

  render() {
    return (
      <div className = {this.state.classNameHere}>
        <GridCore name = {this.props.name}/>
        some product {this.props.name} description
        <p>Price: $1234.40</p>
        <button className='btn btn-primary'>Add to cart</button>
      </div>
    );
  }
}
