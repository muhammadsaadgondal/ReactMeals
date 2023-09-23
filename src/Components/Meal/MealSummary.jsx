import React from "react";
import classes from "./MealSummary.module.css";

const MealSummary = () => {
    return <div className={classes.summary}>
        <h2>Delecious Food, Delivery To You</h2>
        <p>
            Choose your favourite meal from our brand selection of available meals and enjoy
            a delicious lunch or dinner at home.<br /><br />
            All our meals are cooked with high-quality indredient,
             just-in-time and of course by experienced chefs!
        </p>
    </div>
}

export default MealSummary;