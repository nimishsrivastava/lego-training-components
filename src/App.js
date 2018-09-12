import React, {Component} from 'react';
import './App.css';
import './components/TextField'
import TextField from './components/TextField/TextField';
import Button from "./components/Button";
import Modal from "./components/Modal";
class App extends Component {
    render() {
        return (
            <div className="App">
                Draw your components here
                <TextField/>
                <Button/>
                <Modal/>
            </div>
        );
    }
}

export default App;
