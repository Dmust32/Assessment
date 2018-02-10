import React, { Component } from 'react';
import './App.css';
import AddButton from "./components/AddButton"


class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>To Do List</h1>
       <div className="add">
       < AddButton />
       </div>
       
      </div>
    );
  }
}

export default App;
