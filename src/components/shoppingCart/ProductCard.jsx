import { Card } from "../card/Card";

const ProductCard = ({
  products,
  onAddToCart,
  cart,
  toggleCartHandler,
  deleteCartHandler,
}) => {
  return (
    <Card>
      <h2> Product Card </h2>
      <section className="gridContainer">
        {products.map((product) => {
          const { name, price, category } = product;
          //console.log("pro", product)
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
      <section>
        <h2> Display Cart </h2>
        {cart.length === 0 ? (
          <p> Your Cart is empty! </p>
        ) : (
          <div>
            <section className="gridContainer">
              {cart.map((item) => (
                <article key={item.id} className="gridItem">
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => toggleCartHandler(item.id)}
                  />
                  <p> {item.name} </p>
                  <p> {item.price} </p>
                  <p> {item.category} </p>

                  <button onClick={() => deleteCartHandler(item.id)}>
                    Delete
                  </button>
                </article>
              ))}
            </section>
            <section>
              {cart.length > 0 && (
                <div>
                  <p>Cart Count: {cart.length}</p>
                  {cart.map((item, index) => (
                    <p key={item.id}>
                      Item {item.id}: ${item.price}
                    </p>
                  ))}
                  <p>
                    Total Price: $
                    {cart.reduce((sum, item) => sum + item.price, 0)}
                  </p>
                </div>
              )}
            </section>
          </div>
        )}
      </section>
    </Card>
  );
};

export default ProductCard;
