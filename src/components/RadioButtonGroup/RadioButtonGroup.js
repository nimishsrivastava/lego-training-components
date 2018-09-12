import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RadioButton from "./RadioButton";

class RadioButtonGroup extends Component {

    render() {
        return (
            <div className={this.props.radioButtonGroupContainerClassName}>
                {
                    this.props.data.map((item, key) => (
                        <RadioButton isActive={item[this.props.idKey] === this.props.selectedButtonId}
                                     id={item[this.props.idKey]}
                                     label={item[this.props.valueKey]} {...this.props}/>
                    ))
                }
            </div>
        );
    }
}

RadioButtonGroup.defaultProps = {
    idKey: 'id',
    valueKey: 'value',
    selectedButtonId: null,
    radioButtonGroupContainerClassName: ''
}

RadioButtonGroup.propTypes = {
    data: PropTypes.array.isRequired,
    idKey: PropTypes.string,
    valueKey: PropTypes.string,
    onSelect: PropTypes.func,
    radioButtonGroupContainerClassName: PropTypes.string
}

export default RadioButtonGroup;
