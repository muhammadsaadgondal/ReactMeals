
import React, { Fragment, useContext } from "react";
import classes from "./Header.module.css";
import MealImage from "../../assets/meals.jpg"
import HeaderButton from "./HeaderButton";


const Header = (props) => {
 

    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderButton onClick={props.onShowCart} >Cart</HeaderButton>
        </header>
        <div className={classes['main-image']}>
            <img src={MealImage} alt="Food on the table" />
        </div>
    </Fragment>
}

export default Header;