import { productActions as actionTypes} from '../constants';

const productCatalogReducer = (state = '', action) => {
    switch(action.type) {
        case actionTypes.INITIATE_PRODUCT_CATALOG_REQUEST: 
        return [
			...state,
			action.data
        ]
        default:
		return state;
    }
}

export default productCatalogReducer;