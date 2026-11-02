import { useState } from "react";

import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "MacBook Pro",
    price: 150000,
    category: "Laptop",
    completed: false,
  },
  {
    id: 2,
    name: "iPhone",
    price: 80000,
    category: "Mobile",
    completed: false,
  },
  {
    id: 3,
    name: "AirPods",
    price: 20000,
    category: "Audio",
    completed: false,
  },
];

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

//   function onAddToCart(product) {
//     setCart([...cart, product]);
//   }

// better
function onAddToCart(product) {
  setCart(prevCart => [
    ...prevCart,
    product
  ]);
}

  const deleteCartHandler = function (id) {
    //return setCart(cart.filter((item) => item.id !== id));
    setCart(prevCart =>
  prevCart.filter(item => item.id !== id)
);
  };

  const toggleCartHandler = function (id) {
    // return setCart(
    //   cart.map((item) =>
    //     item.id === id ? { ...item, completed: !item.completed } : item,
    //   ),
    // );
    setCart(prevCart =>
  prevCart.map(item =>
    item.id === id
      ? { ...item, completed: !item.completed }
      : item
  )
);
  };
  return (
    <div>
      <ProductCard
        products={products}
        onAddToCart={onAddToCart}
        cart={cart}
        toggleCartHandler={toggleCartHandler}
        deleteCartHandler={deleteCartHandler}
      />
    </div>
  );
};

export default ShoppingCart;
