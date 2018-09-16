import styled from 'styled-components';

function getWidthString(span) {
    if(!span) return;
    let width = span / 12 * 100;
    return `width: ${width}%;`;
}

const Column = styled.div`
    float: left;
    ${({ xs }) => (xs ? getWidthString(xs) : 'width: 100%;')};

    @media only screen and (min-width: 768px) {
        ${({ sm }) => sm && getWidthString(sm)};
    }

    @media only screen and (min-width: 992px) {
        ${({ md }) => md && getWidthString(md)};
    }

    @media only screen and (min-width: 1200px) {
        ${({ lg }) => lg && getWidthString(lg)};
    }
`;

const ProductList = styled.div`
    width: 100%;
    text-align: left;
    margin-top: 10px;
`;

const ProductContainer = styled.div`
    border: 1px solid #ddd;
    vertical-align: top;
    display: inline-block;
    margin-bottom: -1px;
    width: 100%;
    padding-bottom: 20px;
    height: 320px;
    @media only screen and (max-width: 1025px) {
        height: 230px;
    }
    @media only screen and (max-width: 736px) {
        height: 100%;
    }
`;

const NotificationBox = styled.div`
    padding: 10px;
    margin-left: 5px;
    background-color: ${props => (props.isSale) ? 'red' : 'green'};
    visibility: ${props => 
        {if (props.isSale) {
            return 'visible';
        } else if (props.isExclusive) { 
            return 'visible';
        }
        return 'hidden';}
    };
    color: #fff;
    display: inline-block;
    @media only screen and (max-width: 812px) {
        padding: 6px;
    }
`;

const ProductImageCont = styled.div`
    text-align: center;
    width: 100%;
`;

const ProductImage = styled.img`
    width: 80%;
`;

const ProductName = styled.div`
    font-size: 20px;
    font-weight: bold;
    padding-top: 10px;
    padding-left: 10px;
    display: grid;
    width: 50%;
    float: left;
    margin-right: 10%;
    @media only screen and (max-width: 812px) {
        font-size: 16px;
    }
    @media only screen and (min-width: 813px) and (max-width: 1025px) {
        margin-right: 7%;
        font-size: 16px;
    }
`;

const ProductPrice = styled.div`
    font-size: 28px;
    padding-top: 10px;
    font-weight: bold;
    @media only screen and (max-width: 1025px) {
        font-size: 18px;
    }
`;

export default {
    Column,
    ProductList,
    ProductContainer,
    NotificationBox,
    ProductImageCont,
    ProductImage,
    ProductName,
    ProductPrice,
}