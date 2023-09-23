import React, { useContext } from "react";
import classes from "./MyCart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../store/Cart-context";
import CartItem from "./CartItem";

const MyCart = (props) => {
    const cntxt = useContext(CartContext);
    const addHandler = (item) => {
        // console.log(item);
        cntxt.addItem({ ...item, amount: 1 })
    }
    const remHandler = (id) => {
        cntxt.removeItem(id);
    }
    const amount = `$${cntxt.totalAmount.toFixed(2)}`;
    const cartItems = <ul className={classes.list}>{cntxt.items.map(item => (
        <CartItem
            key={item.id}
            price={item.price}
            name={item.name}
            amount={item.amount}
            onAdd={addHandler.bind(null, item)}
            onRemove={remHandler.bind(null, item.id)}
        >{item.name}</CartItem>
    ))}</ul>;

    console.log(cartItems);
    return <Modal drop={props.onDrop}>
        {cartItems}
        <div >
            <div className={classes.total}>
                <span>
                    Total Amount
                </span>
                <span>
                    {amount}
                </span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onDrop} className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </div>


    </Modal>
}

export default MyCart;