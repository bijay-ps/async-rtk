import Card from '../UI/Card.jsx';
import classes from './ProductItem.module.css';
import {addItemToCart} from "../../store/slices/cart.slice.js";
import {useDispatch} from "react-redux";

const ProductItem = (props) => {
  const { id, title, price, description } = props;

  const dispatch = useDispatch();

  const addSelectedItemToCart = () => {
    dispatch(addItemToCart({ id, title, price, description }));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addSelectedItemToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
