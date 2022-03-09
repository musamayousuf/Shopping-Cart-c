import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import SingleProduct from './components/SingleProduct';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import {CartContext} from './CartContext';
import { getCart, storeCart } from './helper';

const App = () => {

    const [ cart, setCart ] = useState({})

    //Fetch from LocalStorage
    useEffect(() => {
        getCart().then(cart=>{
            setCart(JSON.parse(cart))
        });
    }, [])

    useEffect(() => {
        storeCart(JSON.stringify(cart))
    }, [cart])

    return (
        <>
            <Router>
                <CartContext.Provider value={{cart, setCart}}>
                    <Navigation />
                    <Switch>
                        <Route path="/" component={Home} exact></Route>
                        <Route path="/products" exact component={ProductsPage}></Route>
                        <Route path="/products/:id" component={SingleProduct}></Route>
                        <Route path="/cart" component={Cart}></Route>
                    </Switch>
                </CartContext.Provider>
            </Router>
        </>
    )

}

export default App
