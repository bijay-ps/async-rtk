import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleCard } from "../../store/slices/ui.slice.js";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(toggleCard());
  };

  const totalItems = useSelector((state) => state.cart.totalItems);

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
