import React, { useEffect, useState } from 'react'
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/product';
import "./shop.css"
const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);
useEffect(()=>{
    fetch("./products.JSON")
    .then(res=>res.json())
    .then(data=>setProducts(data))
},[]);

useEffect(()=>{
    const savedCart=getStoredCart();
    for(const key in savedCart){
        const addedProduct=products.find(product=>
            product.key===key);
            console.log(key, addedProduct);
        };
    },[]);
const handleCart=(product)=>{
    const newCart=[...cart,product];
    setCart(newCart);
    addToDb(product.key);
}
    return (
        <div className="product-container">
        <div className="product-details">
<h4>This is the product details</h4>
{
    products.map(product=><Product
    key={product.key}
    product={product}
    handleCart={handleCart}
    ></Product>)
}
        </div>
        <div className="cart-details">
        <Cart cart={cart}></Cart>
        </div>
        </div>
    )
}

export default Shop;