import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/Cart-context";

const MealItem = (props) => {
    const cntxt = useContext(CartContext);

    const additionHandler = (amount) => {
        // console.log("Adding item to cart");
        cntxt.addItem({
            name: props.name,
            id: props.id,
            price: props.price,
            amount: amount
        });
    }

    return <li className={classes.meal}>
        <div>
            <h3 >{props.name}</h3>
            <div className={classes.description}>{props.desc} </div>
            <div className={classes.price}>{props.price}</div>
        </div>
        <MealItemForm onAddition={additionHandler} />
    </li>
}

export default MealItem;
