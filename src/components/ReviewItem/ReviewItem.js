import React from 'react'

const ReviewItem = (props) => {
    const {name,price,quantity,img,key}=props.product;
    return (
        <div className="single-product">
            <img src={img} alt="image" className="img"/>
            <div className="info">
<h3 className="head">Name: {name}</h3>
<h5>Price:{price}</h5>
<h6>Quantity: {quantity}</h6>
<button className="btn-purchase" onClick={()=> props.handleRemove(key)}>Remove</button>
        </div>
        </div>
    )
}

export default ReviewItem;