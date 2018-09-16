import {combineReducers} from 'redux';
import productCatalog from './productCatalogReducer';
import filteredProductCatalog from './filteredProductCatalogReducer';

const rootReducer = combineReducers({
    productCatalog,
    filteredProductCatalog,
});

export default rootReducer;
