function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'SET_GOODS': {
      const { data } = payload;
      return {
        ...state,
        goods: data || [],
        isLoading: false,
      };
    }

    case 'ADD_TO_BASKET': {
      const { item } = payload;

      const itemIndex = state.order.findIndex((orderItem) => orderItem.id === item.id);

      let newOrder = null;

      if (itemIndex < 0) {
        const newItem = {
          ...item,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }

      localStorage.setItem('order', JSON.stringify(newOrder));

      return {
        ...state,
        order: newOrder,
        alertName: item.name,
      };
    }

    case 'REMOVE_FROM_BASKET': {
      const { id } = payload;

      const newOrder = state.order.filter((orderItem) => orderItem.id !== id);

      localStorage.setItem('order', JSON.stringify(newOrder));

      return {
        ...state,
        order: newOrder,
      };
    }

    case 'INCREMENT_QUANTITY': {
      const { id } = payload;
      let newOrder = null;
      newOrder = state.order.map((orderItem) => {
        if (orderItem.id === id) {
          const newQuantity = orderItem.quantity + 1;
          return { ...orderItem, quantity: newQuantity };
        } else {
          return orderItem;
        }
      });

      localStorage.setItem('order', JSON.stringify(newOrder));

      return {
        ...state,
        order: newOrder,
      };
    }

    case 'DECREMENT_QUANTITY': {
      const { id } = payload;
      let newOrder = null;
      newOrder = state.order
        .map((orderItem) => {
          if (orderItem.id === id) {
            const newQuantity = orderItem.quantity - 1;
            return { ...orderItem, quantity: newQuantity >= 0 ? newQuantity : 0 };
          } else {
            return orderItem;
          }
        })
        .filter((item) => item.quantity !== 0);

      localStorage.setItem('order', JSON.stringify(newOrder));

      return {
        ...state,
        order: newOrder,
      };
    }

    case 'TOGGLE_BASKET': {
      return {
        ...state,
        isBasketVisible: !state.isBasketVisible,
      };
    }
    case 'CLOSE_ALERT': {
      return {
        ...state,
        alertName: '',
      };
    }

    default: {
      return state;
    }
  }
}

export default reducer;
