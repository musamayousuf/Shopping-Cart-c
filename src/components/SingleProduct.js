import React, {useEffect, useState} from 'react'
import { useParams, useHistory } from 'react-router-dom';
import ProductData from "./ProductData";

const SingleProduct = () => {

    const [products, setProducts] = useState(ProductData);
    const [single, setSingle] = useState({});

    const params = useParams();
    const history = useHistory();

    useEffect(()=>{
        let pdata  = products.find(x=>x.id == params.id)
        setSingle(pdata)
        
    },[])
    //  setData(pdata);
    //  console.log("Product data ",data)
     // useEffect(() => {
    //     fetch(`/api/products/${params.id}`)
    //     .then(res=>res.json())
    //     .then(product=>{
    //         setProduct(product);  
    //     });
    // }, [params.id]);

    return (
        <div className="container mx-auto mt-12">
        <button className="mb-12 font-bold" onClick={()=>{history.goBack()}}>Back</button>
        <div className="flex">
            <img src={single.imgSrc} alt="" />
            <div className="ml-16">
            <h1 className="text-xl font-bold">{single.title}</h1>
            <div className="text-md">{single.size}</div>
            <div className="font-bold mt-2">$ {single.price}</div>
            <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">Add to cart</button>

            </div>
        </div>
        </div>
    )
}

export default SingleProduct;
