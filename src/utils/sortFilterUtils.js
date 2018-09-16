import {orderBy, filter, uniqBy} from 'lodash';

/**
 * sort data based on price in ascending or decending order.
 */
export const sortData = (sourceList, mode) => {
    return orderBy(sourceList, [`price`],[`${mode}`]);
}

/**
 * Filter data if 'isSale' or 'isExclusive' is true.
 */
export const filterDataBySaleORExclusive = (sourceList, keyName) => {
    return filter(sourceList, [`${keyName}`, true]);
}

/**
 * Filter data based on size selected using checkbox
 */
export const filterSize = (sourceList, selectedSize) => {
    let pList = [];
    console.log(selectedSize);
    selectedSize.map(selSize => 
        sourceList.map(product =>
            product.size.filter(size => {
                if(selSize === size) {
                    pList.push(product)
                }
            })
    ))
    return uniqBy(pList, 'index');
  }