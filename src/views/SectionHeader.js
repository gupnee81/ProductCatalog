import React from 'react';
import DropDownComponent from '../components/DropDownComponent';
import Checkbox from '../components/CheckBoxComponent';
import {dropDownList} from '../constants';
import SectionHeaderStyles from '../styles/SectionHeaderStyles';

class SectionHeader extends React.Component {
    render() {
        return (
            <section>
                <SectionHeaderStyles.SectionHeader>
                    <SectionHeaderStyles.Title>{this.props.title}</SectionHeaderStyles.Title>
                    <SectionHeaderStyles.DIV>
                        <DropDownComponent 
                            id='filterAndSorting'
                            name='filterAndSorting'
                            text=''
                            displayElements={dropDownList}
                            handleChange={this.props.sortProducts}
                        />
                        <div>
                        {
                            this.props.productSizeGroup && this.props.productSizeGroup.map((chkBox, index) => (
                                <Checkbox key={index}
                                id={chkBox.text}
                                name={chkBox.text}
                                text={chkBox.text}
                                checked={this.props.sizes[`${chkBox.text}`]}
                                handleChange={this.props.handleCheckBox}
                            />
                            ))
                        }
                        </div>
                    </SectionHeaderStyles.DIV>
                </SectionHeaderStyles.SectionHeader>
            </section>
        )
    }
}

export default SectionHeader;