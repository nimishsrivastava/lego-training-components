import React, {Component} from 'react';
import './App.css';
import './components/TextField'
import RadioButtonGroup from "./components/RadioButtonGroup";

const data = [{genderId: '1', value: 'Male'}, {genderId: '2', value: 'Female'}, {genderId: '3', value: 'Others'}]

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedButtonId: ''
        };
    }

    render() {
        return (
            <div className="App">
                <RadioButtonGroup
                    data={data}
                    idKey={'genderId'}
                    onClick={(id, value) => {
                        this.setState({
                            selectedButtonId: id,
                        });
                    }}
                    selectedButtonId={this.state.selectedButtonId}
                />
            </div>
        );
    }
}

export default App;
