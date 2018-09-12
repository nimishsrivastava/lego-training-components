import React, {Component} from 'react';
import './App.css';
import './components/TextField'
import TextField from './components/TextField/TextField';
import Button from "./components/Button";

class App extends Component {
    render() {
        return (
            <div className="App">
                Draw your components here
                <TextField/>
                <Button/>
            </div>
        );
    }
}

export default App;
