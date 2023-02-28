import './styles/App.css';

import { ShopContextProvider } from './context/Context';

import Header from './layout/Header';
import Shop from './components/Shop';
import Footer from './layout/Footer';

function App() {
  return (
    <>
      <Header />
      <ShopContextProvider>
        <Shop />
      </ShopContextProvider>
      <Footer />
    </>
  );
}

export default App;
