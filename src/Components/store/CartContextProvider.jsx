import { useReducer } from 'react';

import CartContext from './Cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        // const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        /* Checking if item already exists */
        const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingItem = state.items[existingItemIndex];
        let updatedItem;
        let updatedItems;
        if (existingItem) {
            updatedItem = {
                ...existingItem,
                amount: existingItem.amount + action.item.amount
            };
            updatedItems = [...state.items]
            updatedItems[existingItemIndex] = updatedItem;
        }
        else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    else if (action.type === 'REMOVE') {
        // console.log("IN remove");
        const itemIndex = state.items.findIndex(item => item.id === action.id);
        console.log(itemIndex);
       
        const updatedTotalAmount = state.totalAmount - state.items[itemIndex].price;
        const existingItem = state.items[itemIndex];
        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            };
        }
        else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[itemIndex] = updatedItem;
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            };
        }
      
    }
    return defaultCartState;
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        console.log("Dispatching");
        dispatchCartAction({ type: 'ADD', item: item });
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
