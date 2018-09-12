import React, {Component} from 'react';
import './App.css';
import './components/TextField'
import RadioButtonGroup from "./components/RadioButtonGroup";
import CustomerModal from "./modal/customerModal";

const data = [{genderId: '1', value: 'Male'}, {genderId: '2', value: 'Female'}, {genderId: '3', value: 'Others'}]

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedButtonId: ''
        };
        this.customer = new CustomerModal()
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
                    modal={this.customer}
                    modalKey={'genderId'}
                    selectedButtonId={this.state.selectedButtonId}
                />
                <button onClick={() => {
                    // alert(this.customer.genderId)
                }} />
            </div>
        );
    }
}

export default App;
