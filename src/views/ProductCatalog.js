import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {pickBy, keys} from 'lodash';
import productsData from '../json/products.json';
import {sizeChkBoxDefaultValue, productSizeGroup, IS_SALE, IS_EXCLUSIVE, ASC, DESC, SHOWALL} from '../constants';
import {initiateProductRequest, updateFilteredProductCatalog} from '../action/productCatalogAction';
import CatalogStyles from '../styles/ProductCatalogStyles';
import Product from '../components/ProductComponent';
import SectionHeader from './SectionHeader';
import {sortData, filterDataBySaleORExclusive, filterSize} from '../utils/sortFilterUtils';

class ProductCatalog extends React.Component {
/**
 * state declaration
 * sizes: To set default state for check boxes.
 * selectedDropDownValue: It is used to store selected value of drop down.
 * selectedSize: It is used to store value of selected check boxes like 'XS, S, M, L XL'
 */

  state = {
    sizes: {
      XS: sizeChkBoxDefaultValue.XS,
      S: sizeChkBoxDefaultValue.S,
      M: sizeChkBoxDefaultValue.M,
      L: sizeChkBoxDefaultValue.L,
      XL: sizeChkBoxDefaultValue.XL,
    },
    selectedDropDownValue: SHOWALL,
    selectedSize: []
  }

/**
 * Life cycle method of React dispatches an action to move JSON data to Redux store.
 */
  componentWillMount = () => {
   this.props.actions.initiateProductRequest(productsData);
  }

  /**
   * It does sorting of data from High - Low and Low - High based on price.
   * It filter recods that are tagged as 'Sale' or 'Exclusive' in the JSON File.
   * It display all records based on index number in JSON file. 
   */
  sortProducts = (event) => {
    let selectedValue = event.target.value;
    let processedList;
    const productCatalog = this.props.productCatalog[0];
    let copyOfSelectedDropDownValue = this.state.selectedDropDownValue;
    copyOfSelectedDropDownValue = selectedValue;
   

    if(selectedValue === ASC || selectedValue === DESC) {
      processedList = sortData(productCatalog, selectedValue);
      if(this.checkIfProductSizeSelected())
      {
        processedList = filterSize(processedList, this.state.selectedSize);
      }
    }

    if(selectedValue === IS_SALE || selectedValue === IS_EXCLUSIVE) {
      processedList = filterDataBySaleORExclusive(productCatalog, selectedValue);
      if(this.checkIfProductSizeSelected())
      {
        processedList = filterSize(processedList, this.state.selectedSize);
      }
    }

    if(selectedValue === SHOWALL) {
      processedList = productCatalog;
      this.resetCheckBoxes();
    }

    this.setState({selectedDropDownValue: copyOfSelectedDropDownValue});
    this.props.actions.updateFilteredProductCatalog(processedList);
  }

  /**
   * Check, if product size checkbox is selected.
   */
  checkIfProductSizeSelected = () => {
    if(this.state.selectedSize.length >= 1) {
      return true;
    }
    return false;
  }

  /**
   * Reset checkboxes to false when 'ShowAll' is selected in drop down.
   */
  resetCheckBoxes = () => {
    const copyOfSizesState = this.state.sizes;
    for(let i=0; i<productSizeGroup.length; i++) {
      copyOfSizesState[`${productSizeGroup[i].value}`] = false;
    }

    this.setState({selectedSize: []});
    this.setState({sizes: copyOfSizesState});
  }

/**
 * Toggle checkboxes.
 * creates an array with selected sizes to filter data.
 * If any of the checkbox is selected - call filterSize()
 */
  handleCheckBox = (event) => {
    let selectedSize = [];
    let processedList;
    const productCatalog = this.props.productCatalog[0];
    const id = event.target.id;
    // Toggle checkbox prop : checked 
    const copyOfSizesState = this.state.sizes;
    copyOfSizesState[`${id}`] = !copyOfSizesState[`${id}`];
    this.setState({sizes: copyOfSizesState});
    
    // create an array of selected checkbox
    selectedSize = keys(pickBy(this.state.sizes));

    processedList = productCatalog;
    if(selectedSize.length >= 1) {
      processedList = filterSize(productCatalog, selectedSize);
    }

    if(this.state.selectedDropDownValue !== SHOWALL) {
      if(this.state.selectedDropDownValue === ASC || this.state.selectedDropDownValue === DESC) {
        processedList = sortData(processedList, this.state.selectedDropDownValue);
      }
      if(this.state.selectedDropDownValue === IS_SALE || this.state.selectedDropDownValue === IS_EXCLUSIVE) {
        processedList = filterDataBySaleORExclusive(processedList, this.state.selectedDropDownValue);
      }
      
    }

    this.setState({selectedSize});
    this.props.actions.updateFilteredProductCatalog(processedList);
  }

  /**
   * Standard React function to render components
   */
  render() {
    return (
      <CatalogStyles.Main>
          <SectionHeader 
            title = "Women's tops"
            sortProducts = {this.sortProducts} 
            handleCheckBox = {this.handleCheckBox} 
            sizes={this.state.sizes}
            productSizeGroup={productSizeGroup}
            />
          <Product ProductCatalog={this.props.filteredCatalog[0]} />
      </CatalogStyles.Main>
    );
  }
}

/**
 * Hook up piece of data from redux store which component can access using 
 * 'this.props.***'
 */
const mapStateToProps = (state) => ({
  productCatalog: state.productCatalog,
  filteredCatalog: state.filteredProductCatalog,
})

/**
 * Dispatches an actions which component can access using 'this.props.actions.***',
 */
const mapDispathToProps = (dispatch) => ({
  actions: bindActionCreators({initiateProductRequest, updateFilteredProductCatalog}, dispatch)
})

/**
 * connect component to use data that is inside 'mapStateToProps'.
 * and use actions that are hooked up inside 'mapDispatchToProps'.
 */
export default connect(mapStateToProps, mapDispathToProps)(ProductCatalog);
