import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./product.css"

const Product = (props) => {
    const {name, price,seller,img,stock}=props.product;
    const element=<FontAwesomeIcon icon={faShoppingCart} />;
    return (
        <div className="single-product">
            <img src={img} alt="product images" className="img"/>
            <div className="info">
            <h5 className="head">{name}</h5>
            <p>Price: {price}</p>
            <p>Hosted By: {seller}</p>
            <p>Only {stock} pieces are left!! Hurry up!!</p>
            <button onClick={()=> props.handleCart(props.product)} className="btn-purchase">{element} add to cart</button>
            </div>
        </div>
    )
}

export default Product;