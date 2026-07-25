import ProductItem from "./ProductItem.jsx";
import classes from "./Products.module.css";
import { useSelector } from "react-redux";

const Products = () => {
  const products = useSelector((state) => state.products.items);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            id={product.id}
            title={product.title}
            key={product.id}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
