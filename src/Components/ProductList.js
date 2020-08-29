import React,{ useContext,useEffect}from 'react';
import {ProductContext} from '../Contexts/ProductContext';
import Loader from './Loader';
import ProductComponent from './ProductComponent';


const ProductList = () => {

    const productContextData=useContext(ProductContext);
    console.log(productContextData);

    const {products,onProductsStateChange}=productContextData;

    useEffect(
        ()=>
        {
            fetch("https://fakestoreapi.com/products")
            .then(data=>data.json())
            .then(data=>{
                console.log(data)
                onProductsStateChange(data)})
        },[])

        console.log(productContextData)

        return(
            <div>
            {
            (!products.length)?<Loader/>:
            (
                <div>
                {
                    products.map((product)=>{
                        return(
                        <ProductComponent product={product} />
                        )
                    } )
                }
                </div>
            )
           }
        </div>

        )
        
};

export default ProductList;