import React from "react";
import classes from "./Cart.module.css";

const Cart = (props) => {
    return (
        <div className={classes.Cart}>
            <div className={classes.icon}>
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </div>
            <label className={classes.yourcart}>Your Cart</label>
            <div>
                <label className={classes.count}>
                    {props.count}
                </label>
            </div>
        </div>
    );
}

export default Cart;
