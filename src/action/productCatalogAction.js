import { productActions as actionTypes} from '../constants';

export const initiateProductRequest = (data) => ({
    type: actionTypes.INITIATE_PRODUCT_CATALOG_REQUEST,
    data,
});

export const updateFilteredProductCatalog = (data) => ({
    type: actionTypes.UPDATE_PRODUCT_CATALOG_SUCCESS,
    data,
});
