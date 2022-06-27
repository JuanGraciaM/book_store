import React from 'react';
import Cart from '../../assets/cart.png';
import './CartWidget.css';

function CartWidget() {
    return (
        <div className="cartwidget">
            <div className="cartwidget__cart-container">
                <img src={Cart} className="cartwidget__cart-container--img"alt="cart"></img>
                <p className="cartwidget__cart-container--p">$0.00</p>
            </div>
        </div>
    )
};

export default CartWidget;