import { Card } from "../card/Card";

const CartSummary = ({
cart,
deleteCartHandler,
}) => {
  return (
    <Card>
        <h2> Display Cart </h2>
        {cart.length === 0 ? (
          <p> Your Cart is empty! </p>
        ) : (
          <div>
            <section className="gridContainer">
              {cart.map((item) => (
                <article key={item.id} className="gridItem">
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
    </Card>
  )
}

export default CartSummary
