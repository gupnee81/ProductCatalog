import React from 'react';
import CheckBoxStyle from '../styles/CheckBoxStyles';
import PropTypes from 'prop-types';

class CheckboxComponent extends React.Component {
    render() {
        const {id, name, text, checked, handleChange } = this.props;
        return (
            <span>
                <CheckBoxStyle.Input
                    type='checkbox'
                    id={id}
                    name={name}
                    checked={checked}
                    onChange={handleChange}
                >
                </CheckBoxStyle.Input>
                <CheckBoxStyle.Label htmlFor={id}>{text}</CheckBoxStyle.Label>
            </span>
        );
      }
}

export default CheckboxComponent;