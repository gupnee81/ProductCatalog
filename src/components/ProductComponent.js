import React from 'react';
import ProductStyles from '../styles/ProductsStyles';
import {IS_SALE, IS_EXCLUSIVE} from '../constants';
import {formatPrice} from '../utils/formatNumber';

class ProductComponent extends React.Component {
    render() {
        return (
            <section>
                <ProductStyles.ProductList>
                    {this.props.ProductCatalog && this.props.ProductCatalog.map((product, index) => (
                    <ProductStyles.Column xs={12} sm={4} md={3} key={index}>
                        <ProductStyles.ProductContainer>
                            <ProductStyles.ProductImageCont>
                                <ProductStyles.ProductImage src={require(`../images/${product.productImage}`)} alt='product' />
                            </ProductStyles.ProductImageCont> 
                            <div>
                                <ProductStyles.NotificationBox isExclusive={product.isExclusive} isSale={product.isSale}>
                                    {product.isSale && IS_SALE}
                                    {product.isExclusive && IS_EXCLUSIVE}
                                </ProductStyles.NotificationBox>
                            </div>
                            <div>
                                <ProductStyles.ProductName>{product.productName}</ProductStyles.ProductName>
                                <ProductStyles.ProductPrice>{formatPrice(product.price)}</ProductStyles.ProductPrice>
                            </div>
                            <div>{product.size.toString()}</div>
                        </ProductStyles.ProductContainer>
                    </ProductStyles.Column>))
                }
                </ProductStyles.ProductList>
            </section>
        );
    }
}

export default ProductComponent;