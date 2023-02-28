import { useContext } from 'react';
import { ShopContext } from '../context/Context';

function BasketItem(props) {
  const { id, name, price, quantity } = props;

  const {
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = useContext(ShopContext);

  return (
    <li className='collection-item'>
      {name}
      <button
        className='basket-item-btn red lighten-1'
        onClick={() => {
          decQuantity(id);
        }}
      >
        <i className='material-icons '>remove</i>
      </button>
      <button className='basket-quantity-btn red lighten-1'>{quantity}</button>
      <button
        className='basket-item-btn red lighten-1'
        onClick={() => {
          incQuantity(id);
        }}
      >
        <i className='material-icons '>add</i>
      </button>
      = {price * quantity} USD.
      <span className='secondary-content'>
        <i
          className='material-icons basket-delete'
          onClick={() => {
            removeFromBasket(id);
          }}
        >
          close
        </i>
      </span>
    </li>
  );
}

export default BasketItem;
