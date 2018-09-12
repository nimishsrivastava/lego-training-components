import React, {Component} from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import PropTypes from 'prop-types';

class DropdownMenuComponent extends Component {
    render() {
        return (
            <Dropdown
                {...this.props.dropdownProps}
            >
                <DropdownToggle {...this.props.dropdownToggleProps}>
                    {this.props.buttonName}
                </DropdownToggle>
                <DropdownMenu {...this.props.dropdownMenuProps}>
                    {
                        this.props.data.map((item, key) => (
                            <DropdownItem {...item.stylingProps}>{item.label}</DropdownItem>
                        ))
                    }
                </DropdownMenu>
            </Dropdown>
        );
    }
}

export default DropdownMenuComponent;
