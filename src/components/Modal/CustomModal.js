import React from 'react';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import PropTypes from "prop-types";

class CustomModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: props.isVisible
        };
    }

    componentWillReceiveProps(props) {
        this.setState({
            modal: props.isVisible
        })
    }


    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }


    render() {
        /**
         * isCloseVisible Flag will be used to show close Button
         *
         **/
        const {modalStyle,isCloseButtonVisible} = this.props;

        let modalClasses = ['modalStyle', modalStyle].join(' ')
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} backdrop={this.props.backdrop}
                       className={modalClasses}>
                    <ModalHeader toggle={isCloseButtonVisible && this.toggle}>{this.props.modalHeader}</ModalHeader>
                    <ModalBody>
                        {this.props.modalBody}
                    </ModalBody>
                    <ModalFooter>
                        {this.props.modalFooter}
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

CustomModal.defaultProps = {
    modalStyle: 'modalStyle',
    isVisible: false,
    backdrop: 'static',
    isCloseButtonVisible: true,
    modalHeader: 'Header',
    modalFooter: 'Footer',
    modalBody: 'Modal Body'
}

CustomModal.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    backdrop: PropTypes.any,
    isCloseVisible: PropTypes.bool,
    modalHeader: PropTypes.any,
    modalFooter: PropTypes.any,
    modalBody: PropTypes.any,
    modalStyle: PropTypes.string
}

export default CustomModal;