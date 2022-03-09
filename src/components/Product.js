import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../CartContext';

const Product = ({ product }) => {
    const [isAdding, setIsAdding]=useState(false);
    const { cart, setCart } = useContext(CartContext)

    const addToCart = (event, product) => {
        event.preventDefault();

        let _cart = {...cart}; //items: {}
        if (!_cart.items){
            _cart.items={}
        }

        if(_cart.items[product.id]){
            _cart.items[product.id] += 1;
        }

        else{
            _cart.items[product.id]=1;
        }
        
        if(!_cart.totalItems){
        _cart.totalItems =0;
        }
        _cart.totalItems +=1;
        setCart(_cart);
        setIsAdding(true);

        setTimeout(()=>{
            setIsAdding(false);
        },1000);

        console.log(product);
        // const cart = {
        //     items:{
        //         2:4,
        //         4:3,
        //     },
        //     totalItems:7  
        // }
    }
    // const {x} = props;
    return (
        <Link to={`/products/${product.id}`}>
            <div>
                <img src={product.imgSrc} alt="pizza" />
                <div className="text-center">
                    <h2 className="text-lg font-bold py-2">{product.title}</h2>
                    <span className="bg-gray-200 py-1 rounded-full text-sm px-4">{product.size}</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <span>$ {product.price}</span>
                    <button disabled={isAdding} onClick={(e)=>{addToCart(e, product)}} className={`${isAdding?'bg-green-500': 'bg-yellow-500' } py-1 px-4 rounded-full font-bold`}>{`${ isAdding ?'ADDED' : 'ADD' }`}</button>
                </div>
            </div>
        </Link>
    )
}

export default Product;
