import React, { Component } from 'react';
import {render} from 'react-dom';
import {ButtonGroup} from './ButtonGroup.js';
import {TableReact} from './TableReact.js';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import { ModalWindow } from './ModalWindow.js';


class App extends Component {
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      users:[
              {name:'Ivan', leasee: 'Sam', status: 'Busy', notes: '123'},
              {name:'Alex', leasee: 'Stan', status: 'Available', notes: '456'},
              {name:'Alex3', leasee: 'Stan3', status: 'Available3', notes: '4563'},
              {name:'Alex4', leasee: 'Stan4', status: 'Available3', notes: '4563'}
            ],
      showModal: false
      };
  }

  handleChange(){
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  render() {
    return (
      <div>
        <h1 className="headTytle">VM Finder</h1>
        <ButtonGroup />
        <div className = "table-responsive">
          <TableReact users = {this.state.users}/>
        </div>
        <ModalWindow showHere = {this.state.showModal} operateModal = {this.handleChange}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
