import React from 'react';
import Product from './Product';
import {CartContext} from '../CartContext';
import { useState, useEffect, useContext } from 'react';
import ProductData from "./ProductData";

const Products = () => {

    // const { name } = useContext(CartContext);

    const [products, setProducts] = useState(ProductData);

   
    // useEffect(() => {
    //     fetch('/api/products')
    //     .then(response=>response.json())
    //     .then(products=>{
    //         setProducts(products)
    //     });
    // }, []);

    return (
        <div className="container mx-auto pb-24">
            <h1 className="text-lg font-bold my-8">Products</h1>
            <div className="grid grid-cols-5 my-8 gap-24">

                {
                    products.map(x => <Product key={x.id} product={x} />)
                }
            </div>
        </div>
    )
}

export default Products;
