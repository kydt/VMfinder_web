import React, { Component } from 'react';
import {render} from 'react-dom';
import {TableRow} from './TableRow.js';
import {ButtonGroup} from './ButtonGroup.js';
import {TableReact} from './TableReact.js';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
//      name1: '1',
//      name2: '2',
      users:[
              {name:'Ivan', leasee: 'Sam', status: 'Busy', notes: '123'},
              {name:'Alex', leasee: 'Stan', status: 'Available', notes: '456'},
              {name:'Alex3', leasee: 'Stan3', status: 'Available3', notes: '4563'}
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
