import React, {Component} from 'react';
import './App.css';
import './components/TextField'
import RadioButtonGroup from "./components/RadioButtonGroup";
import CustomerModal from "./modal/customerModal";
import DropdownMenuComponent from "./components/Dropdown";

const data = [
    {id: '1', label: 'Header', stylingProps: {header: true}},
    {id: '2', label: 'Action', stylingProps: {disabled: true}},
    {id: '3', label: 'Try', stylingProps: {disabled: false}},
]


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDropdownOpen: false
        };
        this.customer = new CustomerModal()
    }

    toggleDropdown = () => {
        this.setState(prevState => ({
            isDropdownOpen: !prevState.isDropdownOpen
        }));
    }

    render() {
        return (
            <div className="App">
                <DropdownMenuComponent
                    buttonName={'Dropdown'}
                    data={data}
                    dropdownProps={{
                        isOpen: this.state.isDropdownOpen,
                        toggle: () => {
                            this.toggleDropdown()
                        }
                    }}
                />
            </div>
        );
    }
}

export default App;
