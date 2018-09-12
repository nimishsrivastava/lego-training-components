import React, {Component} from 'react';
import PropTypes from 'prop-types'

class RadioButton extends Component {
    render() {
        const {isActive, label, onClick} = this.props;
        let activeOuterClass = ['radio-button__outer-circle--active-blue', this.props.activeOuterClassName].join(' ');
        let inactiveOuterClass = ['radio-button__outer-circle--inactive-blue', this.props.inactiveOuterClassName].join(' ');
        let activeInnerClass = ['radio-button__inner-circle--active-blue ', this.props.activeInnerClassName].join(' ');
        let inactiveInnerClass = ['radio-button__inner-circle--inactive-blue ', this.props.inactiveInnerClassName].join(' ');
        let radioButtonContainerClass = ['main-container__radio-button ', this.props.radioButtonContainerClassName].join(' ');
        let labelClass = ['radio-button__label ', this.props.labelClassName].join(' ');

        return (
            <span className={radioButtonContainerClass} onClick={() => {
                this.props.modal[this.props.modalKey] = this.props.id;
                onClick(this.props.id, this.props.label)
            }}>
                <span
                    className={isActive ? activeOuterClass : inactiveOuterClass}>
                    <span
                        className={isActive ? activeInnerClass : inactiveInnerClass}>
                    </span>
                </span>
                <span className={labelClass}>
                    {label}
                </span>
            </span>
        );
    }
}

RadioButton.defaultProps = {
    label: '',
    onClick: () => {
    },
    activeOuterClassName: null,
    inactiveOuterClassName: null,
    activeInnerClassName: null,
    inactiveInnerClassName: null,
    labelClassName: null,
    radioButtonContainerClassName: null,
}

RadioButton.propTypes = {
    isActive: PropTypes.bool.isRequired,
    label: PropTypes.string,
    onClick: PropTypes.func,
    activeOuterClassName: PropTypes.string,
    inactiveOuterClassName: PropTypes.string,
    activeInnerClassName: PropTypes.string,
    inactiveInnerClassName: PropTypes.string,
    labelClassName: PropTypes.string,
    radioButtonContainerClassName: PropTypes.string,
    modal: PropTypes.object,
    modalKey: PropTypes.string
}

export default RadioButton;