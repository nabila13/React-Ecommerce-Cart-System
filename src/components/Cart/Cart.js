import React from 'react';
import "./Cart.css";
const Cart = (props) => {
    const {cart}=props;

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
            <h4>Total Items ordered: {props.cart.length}</h4>
            <p>Total: {total}</p>
            <p>Shipping cost: {shipping}</p>
            <p>Tax amount: {tax}</p>
            <p>Final Total Cost: {finalTotal}</p>
            <button className="btn-purchase">Place Order</button>
        </div>
    )
}

export default Cart;