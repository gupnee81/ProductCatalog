export const productActions = {
    INITIATE_PRODUCT_CATALOG_REQUEST: 'INITIATE_PRODUCT_CATALOG_REQUEST',
    UPDATE_PRODUCT_CATALOG_SUCCESS: 'UPDATE_PRODUCT_CATALOG_SUCCESS',
}

export const dropDownList = [
    {value: 'showAll', text: 'Show All'},
    {value: 'asc', text: 'Price: Low - High'},
    {value: 'desc', text: 'Price: High - Low'},
    {value: 'isSale', text: 'By Sale'},
    {value: 'isExclusive', text: 'By Exclusive'}
];

export const productSizeGroup = [
    {value: 'XS', text: 'XS'},
    {value: 'S', text: 'S'},
    {value: 'M', text: 'M'},
    {value: 'L', text: 'L'},
    {value: 'XL', text: 'XL'},
]

export const IS_SALE = 'isSale';
export const IS_EXCLUSIVE = 'isExclusive';
export const ASC = 'asc';
export const DESC = 'desc';
export const SHOWALL = 'showAll'

export const sizeChkBoxDefaultValue = {
    XS: false,
    S: false,
    M: false,
    L: false,
    XL: false,
}