import React, { Component } from 'react';
import {render} from 'react-dom';
import {ButtonGroup} from './ButtonGroup.js';
import {TableReact} from './TableReact.js';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      users:[
              {name:'Ivan', leasee: 'Sam', status: 'Busy', notes: '123'},
              {name:'Alex', leasee: 'Stan', status: 'Available', notes: '456'},
              {name:'Alex3', leasee: 'Stan3', status: 'Available3', notes: '4563'},
              {name:'Alex4', leasee: 'Stan4', status: 'Available3', notes: '4563'}
            ]
    };

  }

  render() {
    return (
      <div>
        <h1 className="headTytle">VM Finder</h1>
        <ButtonGroup />
        <div className = "table-responsive">
          <TableReact users = {this.state.users}/>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
