import React, { Fragment, useContext, useEffect, useState } from "react";
import classes from "./HeaderButton.module.css";
import { FaShoppingCart } from 'react-icons/fa';
import CartContext from "../store/Cart-context";

const HeaderButton = (props) => {
    const [btnIsHighlighted, setHighlight] = useState(false);
    const Cartcntx = useContext(CartContext);
    const { items } = Cartcntx;

    const numOfItems = Cartcntx.items.reduce((curNumber, item) => {
        return (curNumber + parseInt(item.amount));
    }, 0);
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setHighlight(true);
        const timer = setTimeout(() => { setHighlight(false) }, 300);
        return () => {
            clearTimeout(timer);
        }
    }, [items])
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    return <button
        className={btnClasses}
        onClick={props.onClick}>
        <FaShoppingCart className={classes.icon} />
        <span className={classes.label}>
            Your Cart
        </span>
        <span className={classes.count}>
            {numOfItems}
        </span>
    </button>
}

export default HeaderButton;