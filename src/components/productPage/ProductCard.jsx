import { Card } from "../card/Card";

const ProductCard = (
  {
  products,
  search,
  onAddToCart
}
) => {

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Card>
      <h2> Product Card </h2>
      {filteredProducts.length === 0 ? (
        <p>No products found matching "{search}"</p>
      ) : (
     <section className="gridContainer">
        {filteredProducts.map((product) => {
          const { name, price, category } = product;
          return (
            <article key={product.id} className="gridItem">
              <p> {name} </p>
              <p> {price} </p>
              <p> {category} </p>
              <button onClick={() => onAddToCart(product)}>Add to Cart</button>
            </article>
          );
        })}
      </section>
   )}
    </Card>
  );
};

export default ProductCard;
