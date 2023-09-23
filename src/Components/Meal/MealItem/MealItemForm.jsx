import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";


const MealItemForm = (props) => {
    const [amountValid, setAmountValid] = useState(true);
    const inputValueRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const count = inputValueRef.current.value;
        const enteredAmount = parseInt(count);
        console.log("In there with :"+enteredAmount);
        if (count.trim().length === 0 || enteredAmount < 1 || enteredAmount > 5) {
            setAmountValid(false);
            // console.log("Returning");
            return;
        }
        // setAmountValid(true);
        props.onAddition(enteredAmount);
    }

    return <form onSubmit={submitHandler} className={classes.form}>
        <Input
            ref={inputValueRef}
            label="Amount"
            input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}
        />
        <button>+ Add</button>
        {!amountValid && <p>Entered value is not Valid</p>}
    </form>
}

export default MealItemForm;