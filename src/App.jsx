import Cart from './components/Cart/Cart.jsx';
import Layout from './components/Layout/Layout.jsx';
import Products from './components/Shop/Products.jsx';
import {useSelector} from "react-redux";

function App() {
  const showCart = useSelector(state => state.ui.showCard);
  return (
    <Layout>
        { showCart && <Cart/>}
      <Products />
    </Layout>
  );
}

export default App;
