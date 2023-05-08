import { createContext, useState } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
  const [value, setValue] = useState(0);

  return (
    <DataContext.Provider value={{ value, setValue, cartItems, setCartItems }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
