
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "MacBook Pro",
    price: 150000,
    category: "Laptop",
  },
  {
    id: 2,
    name: "iPhone",
    price: 80000,
    category: "Mobile",
  },
  {
    id: 3,
    name: "AirPods",
    price: 20000,
    category: "Audio",
  },
];

const ProductList = ({search, onAddToCart}) => {
  return (
      <ProductCard
      products={products}
      search={search}
      onAddToCart={onAddToCart}
      />
  );
};

export default ProductList;
