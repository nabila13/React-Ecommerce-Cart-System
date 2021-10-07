import React from 'react';
import "./Cart.css";
const Cart = (props) => {
    const {cart}=props;
    let len=0;
    for(const prod of cart){
        if(prod.quantity){
        console.log(prod);
    len+=prod.quantity;
        }
        else {
            len++;
        }
}
    let total=0;
    for(const product of cart){
        total+=product.price;
    }

    const shipping=total>0? 15:0;
   const tax=parseFloat(((total+shipping)*0.1).toFixed(2));
   const finalTotal=(total+shipping+tax).toFixed(2);
    return (
        <div>
<h3>Order Summary</h3>
            <h4>Total Items ordered: {len}</h4>
            <p>Total: {total}</p>
            <p>Shipping cost: {shipping}</p>
            <p>Tax amount: {tax}</p>
            <p>Final Total Cost: {finalTotal}</p>
            {props.children}
        </div>
    )
}

export default Cart;