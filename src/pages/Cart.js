import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../CartContext';

import { useParams } from 'react-router-dom';
import ProductData from '../components/ProductData';
import Product from '../components/Product';
import { getQueriesForElement } from '@testing-library/react';

const Cart = () => {

  let total = 0;
  const [products, setProducts] = useState(ProductData);
  const [single, setSingle] = useState([]);

  // const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(CartContext);
  // const params = useParams();

  // console.log(params)
  console.log(cart)

  useEffect(() => {
    if (!cart.items) {
      return
    }
    // let pdata  = products.find(x=>x.id == params.id)
    // console.log(pdata)
    // setSingle(pdata)
    let fildat = [];
    Object.keys(cart.items).forEach(element => {
      let filterdata = products.filter(x => x.id == element)

      fildat = [...fildat, ...filterdata]
    })
    setSingle(fildat);
  }, [])

  // useEffect(() => {
  //   if(!cart.items){
  //     return;
  //   }
  //   fetch('api/......',{
  //     method: 'POST',
  //     headers:{
  //       'Content-Type':'application/json'
  //     },
  //     body: JSON.stringify({ids: Object.keys(cart.items)})
  //   }).then(res=>res.json())
  // .then(products=>{
  // setProducts(products);
  // })
  // }, [cart])

  const getQty = (itemID) => {
    return cart.items[itemID]
  }

  const inc = (itemID) => {
    const existingQty = cart.items[itemID];
    const _cart = { ...cart };
    _cart.items[itemID] = existingQty + 1;
    _cart.totalItems += 1;
    setCart(_cart)
  }

  const dec = (itemID) => {
    const existingQty = cart.items[itemID];
    if(existingQty===1){
      return;
    }
    const _cart = { ...cart };
    _cart.items[itemID] = existingQty - 1;
    _cart.totalItems -= 1;
    setCart(_cart)
  }

  const getSum=(itemID, price)=>{
    const sum = price * getQty(itemID);
    total += sum;
    return sum;
  }

  const handleDelete=(itemID)=>{
    const _cart = {...cart};
    const qty = _cart.items[itemID];
    delete _cart.items[itemID];
    _cart.totalItems-=qty;
    setCart(_cart);
    const updateProductList = single.filter((product) => product.id !== itemID);
    setSingle(updateProductList);
  }

  const handleOrderNow=()=>{
    window.alert("Order placed successfully");
    setSingle([]);
    setCart([]);
  }

  return (

    !single.length ? <img className="mx-auto w-1/2 mt-12" src="https://github.com/haseeb943/Shopping-Cart/blob/main/public/images/empty-cart.png?raw=true" alt="empty-cart" /> :
    <div className="container mx-auto lg:w-1/2 w-full pb-24">
      <h1 className="my-12 font-bold">Cart items</h1>
      <ul>
        {
          single.map((item, index) => {
            {/* console.log(item) */ }
            return (
              <li className="mb-12" key={item.id}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img className="h-16" src={item.imgSrc} alt="pizza" />
                    <span className="font-bold ml-4 w-48">{item.title}</span>
                  </div>
                  <div>
                    <button onClick={() => { dec(item.id) }} className="bg-yellow-500 px-4 py-2 rounded-full leading-none">-</button>
                    <b className="px-4">{getQty(item.id)}</b>
                    <button onClick={() => { inc(item.id) }} className="bg-yellow-500 px-4 py-2 rounded-full leading-none">+</button>
                  </div>
                  <span>$ {getSum(item.id, item.price)}</span>
                  <button onClick={()=>{handleDelete(item.id)}} className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">Delete</button>
                </div>
              </li>
            )
          })
        }

      </ul>
      <hr className="my-6" />
      <div className="text-right">
        <b>Grand Total: </b> $ {total}
      </div>
      <div className="text-right mt-6">
        <button onClick={handleOrderNow} className="bg-yellow-500 px-4 py-2 rounded-full leading-none text-white">Order Now</button>
      </div>
    </div>
  )
}

export default Cart;
