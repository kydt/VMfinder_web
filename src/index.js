import React, { Component } from 'react';
import {render} from 'react-dom';
import {TableReact} from './TableReact.js';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

class App extends Component {
  constructor(){
    super();
    this.saveUser = this.saveUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.state = {
      users:[
              {name:'Ivan', leasee: 'Sam', status: 'Busy', notes: '123'},
              {name:'Alex', leasee: 'Stan', status: 'Available', notes: '456'},
              {name:'Alex3', leasee: 'Stan3', status: 'Available3', notes: '4563'},
              {name:'Alex4', leasee: 'Stan4', status: 'Available3', notes: '4563'}
            ],
      
      };
  }

    saveUser(newUser,id){
      if (id === -1){
        this.setState(
          {
            users: this.state.users.concat(newUser), 
          }
        );
        return;
      }
      this.setState(
        {
          users: this.state.users.map((oldUser, i) => i === id ? newUser : oldUser) 
        }
      );
    }

    deleteUser(id){
      this.setState(
        {
          users: this.state.users.filter((user, index) => index !== id) 
        }
      );
    }

  render() {
    return (
      <div>
        <h1 className="headTytle">VM Finder</h1>
        <div>
          <TableReact users = {this.state.users} save = {this.saveUser} remove = {this.deleteUser}/>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
