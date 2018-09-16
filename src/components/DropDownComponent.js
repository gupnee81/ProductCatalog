import React from 'react';
import DropDownStyle from '../styles/DropDownStyles';

const renderSelectOptions = (element) => (
    <option key={element.value} value={element.value}>
        {element.text}
    </option>
);

class DropDownComponent extends React.Component {
    render() {
        const {id, name, text, displayElements } = this.props;
        return (
            <DropDownStyle.DIV>
                <DropDownStyle.Label htmlFor={id}>{text}</DropDownStyle.Label>
                <div>
                    <DropDownStyle.Select
                        id={id}
                        name={name}
                        onChange={this.props.handleChange}
                    >
                        {displayElements.map(renderSelectOptions)}
                    </DropDownStyle.Select>
                </div>
            </DropDownStyle.DIV>
        );
      }
}

export default DropDownComponent;