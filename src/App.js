import { useState } from "react";
import MyCart from "./Components/Cart/MyCart";
import Header from "./Components/Header/Header";
import Meal from "./Components/Meal/Meal";
import CartProvider from "./Components/store/CartContextProvider";

function App() {
  const [visibleCart, setCartVisible] = useState(false);
  const showCartHandler = () => {
    setCartVisible(true);
  }
  const hideCartHandler = () => {
    setCartVisible(false);
  }

  return (
    <CartProvider >
      {visibleCart && <MyCart onDrop={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Meal />
    </CartProvider>
  );
}

export default App;
