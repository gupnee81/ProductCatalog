import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store'
import ProductCatalog from './views/ProductCatalog';

ReactDOM.render(
    <Provider store={store}>
        <ProductCatalog />
    </Provider>,
    
document.getElementById('root'));
