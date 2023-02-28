import { createContext, useReducer } from 'react';

import reducer from '../reducer';

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const initialState = {
    goods: [],
    isLoading: true,
    order: JSON.parse(localStorage.getItem('order')) || [],
    isBasketVisible: false,
    alertName: '',
  };

  const [value, dispatch] = useReducer(reducer, initialState);

  value.setGoods = (data) => {
    dispatch({ type: 'SET_GOODS', payload: { data } });
  };

  value.addToBasket = (item) => {
    dispatch({ type: 'ADD_TO_BASKET', payload: { item } });
  };

  value.removeFromBasket = (id) => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: { id } });
  };

  value.incQuantity = (id) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: { id } });
  };

  value.decQuantity = (id) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: { id } });
  };

  value.handleBasketVisible = () => {
    dispatch({ type: 'TOGGLE_BASKET' });
  };

  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
