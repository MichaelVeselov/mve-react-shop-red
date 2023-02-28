import { useContext } from 'react';

import { ShopContext } from '../context/Context';

function GoodsItem(props) {
  const { id, name, description, price, full_background } = props;

  const { addToBasket = Function.prototype } = useContext(ShopContext);

  return (
    <div className='card'>
      <div className='card-image'>
        <img src={full_background} alt={name} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{name}</span>
        <p>{description}</p>
      </div>
      <div className='card-action'>
        <button className='btn  red accent-4' onClick={() => addToBasket({ id, name, price })}>
          Buy
        </button>
        <span className='right items-price'>{price} USD</span>
      </div>
    </div>
  );
}

export default GoodsItem;
