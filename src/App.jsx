import Header from './components/header/Header';
import Product from './pages/product/Product';
import './styles/main.scss';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <DataProvider>
      <Header />
      <Product />
    </DataProvider>
  );
}

export default App;
