import { API_KEY, API_URL } from '../config.js';

const getGoods = async () => {
  const response = await fetch(API_URL, {
    headers: {
      Authorization: API_KEY,
    },
  });
  return await response.json();
};

export default getGoods;
