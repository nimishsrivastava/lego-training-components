import React, { Component } from 'react';
import './App.css';
import './components/TextField'
import TextField from './components/TextField/TextField';

class App extends Component {
  render() {
    return (
      <div className="App">
        Draw your components here
        <TextField />
      </div>
    );
  }
}

export default App;
