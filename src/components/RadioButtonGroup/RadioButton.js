import React, {Component} from 'react';
import PropTypes from 'prop-types'

class RadioButton extends Component {
    render() {
        const {isActive, label, onClick} = this.props;
        let activeOuterClass = this.props.activeOuterClassName !== null ? 'radio-button__outer-circle--active-blue ' + this.props.activeOuterClassName : 'radio-button__outer-circle--active-blue'
        let inactiveOuterClass = this.props.inactiveOuterClassName !== null ? 'radio-button__outer-circle--inactive-blue ' + this.props.inactiveOuterClassName : 'radio-button__outer-circle--inactive-blue'
        let activeInnerClass = this.props.activeInnerClassName !== null ? 'radio-button__inner-circle--active-blue ' + this.props.activeInnerClassName : 'radio-button__inner-circle--active-blue'
        let inactiveInnerClass = this.props.inactiveInnerClassName !== null ? 'radio-button__inner-circle--inactive-blue ' + this.props.inactiveInnerClassName : 'radio-button__inner-circle--inactive-blue'
        let radioButtonContainerClass = this.props.radioButtonContainerClassName !== null ? 'main-container__radio-button ' + this.props.radioButtonContainerClassName : 'main-container__radio-button'
        let labelClass = this.props.labelClassName !== null ? 'radio-button__label ' + this.props.labelClassName : 'radio-button__label'

        return (
            <div className={radioButtonContainerClass} onClick={() => {
                this.props.modal[this.props.modalKey] = this.props.id
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
            </div>
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