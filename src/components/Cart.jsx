import { useContext } from 'react';
import { ShopContext } from '../context/Context';

function Cart() {
  const { order = [], handleBasketVisible = Function.prototype } = useContext(ShopContext);

  const quantity = order.length;

  return (
    <div className='cart red lighten-1 white-text' onClick={handleBasketVisible}>
      <i className='material-icons'>shopping_cart</i>
      {quantity ? <span>{quantity}</span> : null}
    </div>
  );
}

export default Cart;
