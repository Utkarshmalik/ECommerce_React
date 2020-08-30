import React, { useState,useContext } from 'react'
import { Input } from 'semantic-ui-react'
import {ProductContext} from '../Contexts/ProductContext';

const InputExampleSize = () => {

    console.log("I am inside");
    const [searchValue,onsearchChange]=useState("");


    const productData=useContext(ProductContext);

    console.log(productData);

    const {products,onProductsStateChange,allProducts}=productData;


    const handleSearchChange=(e)=>
    {

       onsearchChange(e.target.value)
       const userValue=e.target.value;

       const newArray=allProducts.filter((element)=>
       {
           return element.title.startsWith(userValue);
       });
       
       onProductsStateChange(newArray);
    }


    return(
  <div>
    <Input value={searchValue} onChange={handleSearchChange} size='big' icon='search' placeholder='Search...' />
    <br />
    <br />    
  </div>)
}

export default InputExampleSize
