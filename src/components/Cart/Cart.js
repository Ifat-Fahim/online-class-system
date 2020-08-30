import React from "react";

const Cart = (props) => {
    const cart = props.cart;
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        totalPrice += course.price;
    }
    let shipping = 0;
    if (totalPrice > 550) {
        shipping = 0;
    } else if (totalPrice > 250) {
        shipping = 20;
    } else if (totalPrice > 100) {
        shipping = 30;
    }
    const tax = totalPrice * 0.1;
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {cart.length} </h5>
            <p>Product price: {totalPrice}</p>
            <p>Shipping: {shipping} </p>
            <p> Tax: {Number(tax.toFixed(2))}</p>
            <p>
                Grand Total: {Number((totalPrice + shipping + tax).toFixed(2))}{" "}
            </p>
        </div>
    );
};

export default Cart;
