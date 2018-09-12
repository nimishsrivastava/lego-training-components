import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Button extends Component {
    render() {
        const {buttonStyle} = this.props;

        let buttonClasses = ['button', buttonStyle].join(' ')
        return (
            <div>
                <button type="button"
                        className={buttonClasses}
                        disabled={this.props.disabled}
                        onClick={this.props.onClick}
                        {...props}
                >
                    {this.props.buttonText}
                </button>
            </div>
        );
    }
}

Button.defaultProps = {
    buttonText: 'Click Me!',
    disabled:false
}

Button.propTypes = {
    buttonStyle: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool
}

export default Button;