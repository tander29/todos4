import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import ToDoItem from './todoitem.jsx'
import ToDoList from './todolist.jsx'
import { Route } from 'react-router-dom'
import todolist from './todolist.jsx';

class App extends Component {
  render() {
    return (

      <Route render={(props) => <ToDoList _location={props.location.pathname} />}>

      </Route>

    );
  }
}

export default App;
