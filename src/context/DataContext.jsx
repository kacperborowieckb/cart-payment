import { createContext, useState } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
  const [value, setValue] = useState(0);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const images = ['image-product-1', 'image-product-2', 'image-product-3', 'image-product-4'];

  return (
    <DataContext.Provider
      value={{
        value,
        setValue,
        cartItems,
        setCartItems,
        currentPhoto,
        setCurrentPhoto,
        isOpen,
        setIsOpen,
        images,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
