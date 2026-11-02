import {Card} from "../card/Card";

const ProductCard = ({products, handleProductClick}) => {
  return (
    <Card>
         <h2> Product Card </h2>
        <section className="gridContainer">
        {products.map((item) => {
          const { name, price, category } = item;
        return (
            <article key={item.id} className="gridItem">
            <p> {name} </p>
            <p> {price} </p>
            <p> {category} </p>
            <button onClick={() => handleProductClick(name)}>
            Add to Cart
            </button>
          </article>
        )  
        })}
        </section>
      </Card>
  )
}

export default ProductCard
