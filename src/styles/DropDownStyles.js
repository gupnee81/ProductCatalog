import styled from 'styled-components';

const Label = styled.label`
    display: block;
    color: #423F3F;
    font-size: 16px;
    font-weight: bold;
`;

const Select = styled.select`
    height: 38px;
    border-radius: 8px;
    border-radius: 4px;
    outline-style: none;
    border-style: solid;
    border-width: 1px;
    border-color: #ccc;
    padding: 1px 0 1px 8px;
    margin-top: 5px;
`;

const DIV = styled.div`
    // display: inline-block;
    // float: right;
    // margin-right: 20px;
`;


export default {
    Label,
    Select,
    DIV,
}