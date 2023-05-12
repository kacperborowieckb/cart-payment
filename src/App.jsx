import Product from './pages/product/Product';
import Layout from './components/layout/Layout';
import Success from './pages/success/Success';
import Cancel from './pages/cancel/Cancel';
import './styles/main.scss';
import { DataProvider } from './context/DataContext';
import { Route, Routes } from 'react-router';
import '@stripe/stripe-js';

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Product />} />
          <Route path="success" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />
        </Route>
      </Routes>
    </DataProvider>
  );
}

export default App;
