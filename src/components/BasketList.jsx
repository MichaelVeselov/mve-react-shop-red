import { useContext } from 'react';
import { ShopContext } from '../context/Context';

import BasketItem from './BasketItem';

function BasketList() {
  const { order = [], handleBasketVisible = Function.prototype } = useContext(ShopContext);

  const totalPrice = order.reduce((sum, current) => {
    return sum + current.price * current.quantity;
  }, 0);

  return (
    <ul className='collection basket-list'>
      <li className='collection-item active red lighten-1'>Basket</li>
      {order.length && order.some((item) => item.quantity !== 0) ? (
        order.map((item) => {
          if (item.quantity > 0) {
            return <BasketItem key={item.id} {...item} />;
          }
        })
      ) : (
        <li className='collection-item '>Basket is empty</li>
      )}
      <li className='collection-item active red lighten-1'>Total price: {totalPrice} USD.</li>
      <li className='collection-item'>
        <button className='btn btn-small red accent-4'>Place order</button>
      </li>
      <i className='material-icons basket-close' onClick={handleBasketVisible}>
        close
      </i>
    </ul>
  );
}

export default BasketList;
