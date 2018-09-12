import React, {Component} from 'react';
import './App.css';
import './components/TextField'
import TextField from './components/TextField/TextField';
import Button from "./components/Button";
import CustomModal from './components/Modal'

class App extends Component {
    constructor() {
        super();
        this.state = {
            isVisible: false
        }
    }

    onSave = () => {
        this.setState({isVisible: false})
    }


    render() {
        return (
            <div className="App">
                Draw your components here
                <TextField/>
                <Button onClick={() => this.setState({
                    isVisible: true
                })}/>
                <CustomModal
                    backdrop={true}
                    isVisible={this.state.isVisible}
                    isCloseButtonVisible={false}

                />
            </div>
        );
    }
}

export default App;
