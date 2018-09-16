import { productActions as actionTypes} from '../constants';

const filteredProductCatalogReducer = (state = '', action) => {
    switch(action.type) {
        case actionTypes.INITIATE_PRODUCT_CATALOG_REQUEST: 
        return [
			...state,
			action.data
        ]
        case actionTypes.UPDATE_PRODUCT_CATALOG_SUCCESS: 
        return [
			action.data
        ]
        default:
		return state;
    }
}

export default filteredProductCatalogReducer;