import { useEffect, useContext } from 'react';
import { ShopContext } from '../../context/Context';

function Alert() {
  const { alertName = '', closeAlert = Function.prototype } = useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [alertName]);

  return (
    <div id='toast-container'>
      <div className='toast brown lighten-1'>{alertName} was added to the basket.</div>
    </div>
  );
}

export default Alert;
