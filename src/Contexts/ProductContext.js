import React, {createContext, useState} from 'react';

export const ProductContext=createContext();

const ProductContextProvider = (props) => {

    const [productsState,onProductsStateChange]=useState([]) 

    return(
        <ProductContext.Provider value={{products:productsState,onProductsStateChange}}>
        {props.children}
        </ProductContext.Provider>
    )

};

export default ProductContextProvider;