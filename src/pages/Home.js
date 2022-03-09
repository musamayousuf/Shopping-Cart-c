import React from 'react'
import Products from '../components/Products'
import { Link } from 'react-router-dom';

const Home = () => {

    // const orderNow = () => {
    //     <Link to="/products"></Link>
    // }

    return (
        <>
            <div className="hero py-16">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="w-1/2">
                        <h6 className="text-lg"><em>Are you hangry?</em></h6>
                        <h1 className="text-3xl md:text-6xl font-bold">Don't wait !</h1>
                       <Link to="/products"><button className="px-6 py-2 rounded-full bg-yellow-500 text-white mt-4 hover:bg-yellow-600">Order Now</button></Link> 
                    </div>
                    <div className="w-1/2">
                        <img className="w-4/5" src="/images/pizza.png" alt="pizza" />
                    </div>
                </div>
            </div>

            <div className="pb-24">
                <Products />
            </div>
        </>
    )
}

export default Home
