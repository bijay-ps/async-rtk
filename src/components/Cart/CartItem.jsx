import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../store/slices/cart.slice.js";

const CartItem = (props) => {
  const { id, title, quantity, price } = props.item;

  const dispatch = useDispatch();

  const removeSelectedItemFromCart = (productId) => {
    dispatch(removeItemFromCart({ id: productId }));
  };

  const addSelectedItemFromCart = (productId) => {
    dispatch(addItemToCart({ id: productId }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${quantity * price.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => removeSelectedItemFromCart(id)}>-</button>
          <button onClick={() => addSelectedItemFromCart(id)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
