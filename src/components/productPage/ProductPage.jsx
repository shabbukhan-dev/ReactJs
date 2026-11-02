import { useState } from "react";

import SearchBox from "./SearchBox";
import ProductList from "./ProductList";
import CartSummary from "./CartSummary";

export const ProductPage = () => {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  // function onAddToCart(product) {
  //   if (cart.some(item => item.id === product.id)) {
  //     alert('Item already in cart!');
  //     return;
  //   }
  //   setCart((prevCart) => [...prevCart, product]);
  // }

  //better

  function onAddToCart(product) {
  setCart((prevCart) => {
    if (prevCart.some((item) => item.id === product.id)) {
      alert("Item already in cart!");
      return prevCart;
    }

    return [...prevCart, product];
  });
}

  const deleteCartHandler = function (id) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <>
      <SearchBox onSearch={setSearch} />
      <ProductList search={search} onAddToCart={onAddToCart} />
      <CartSummary
        cart={cart}
        deleteCartHandler={deleteCartHandler}
      />
    </>
  );
};
