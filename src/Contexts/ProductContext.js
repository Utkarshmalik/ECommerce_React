import React, {createContext, useState} from 'react';

export const ProductContext=createContext();

const ProductContextProvider = (props) => {

    const [productsState,onProductsStateChange]=useState([]) 
    const [allProducts,allProductsChange]=useState([])

    return(
        <ProductContext.Provider value={{products:productsState,allProducts,onProductsStateChange,allProductsChange}}>
        {props.children}
        </ProductContext.Provider>
    )

};

export default ProductContextProvider;