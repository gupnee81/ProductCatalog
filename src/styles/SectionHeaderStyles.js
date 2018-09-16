import styled from 'styled-components';

const SectionHeader = styled.div`
    background-color: #b4dbf3;
`;

const Title = styled.div`
    font-size: 28px;
    font-weight: bold;
    padding: 18px;
    display: inline-block;
    margin-left: 20px;
`;

const DIV = styled.div`
    display: inline-block;
    float: right;
    margin-right: 20px;
    @media only screen and (max-width: 736px) {
        float: none;
        margin-left: 20px;
    }
`;

export default {
    SectionHeader,
    Title,
    DIV,
}