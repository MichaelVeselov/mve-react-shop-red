import { useEffect, useContext } from 'react';

import Preloader from './UI/Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import BasketList from './BasketList';
import Alert from './UI/Alert';

import { ShopContext } from '../context/Context';

import getGoods from '../API/shopService.js';

function Shop() {
  const { setGoods, isLoading, isBasketVisible, alertName } = useContext(ShopContext);

  useEffect(() => {
    getGoods().then((data) => {
      setGoods(data.featured);
    });
  }, []);

  return (
    <main className='container content'>
      <Cart />
      {isLoading ? <Preloader /> : <GoodsList />}
      {isBasketVisible && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
}

export default Shop;
