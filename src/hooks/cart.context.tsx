import { createContext, useContext, useState } from "react";

import { IMovie } from '../types';

type CartProps = {
  items: IMovie[];
}

type ContextType = {
  cart: CartProps;
  updateCart: (ítem: IMovie, operation?: string) => void;
  addedItemVerify: (id: number) => boolean;
  getCountMovieInCart: (id: number) => number;
  getCountAllMoviesInCart: () => number;
  handleRemove: (id: number) => void;
  getTotalCartValue: () => number;
  handleFinish: () => void;
};

const CartContext = createContext<ContextType>({
  cart: { items: [] },
  updateCart: () => { },
  addedItemVerify: () => false,
  getCountMovieInCart: () => 0,
  getCountAllMoviesInCart: () => 0,
  handleRemove: () => { },
  getTotalCartValue: () => 0,
  handleFinish: () => {}
});

export const CartProvider = (prop: { value?: CartProps, children: JSX.Element[] }) => {

  const [cart, setCart] = useState<CartProps>({ items: [] })

  const updateCart = (item: IMovie, operation = 'plus') => {
    setCart(prev => {
      const itemIndex = prev.items.findIndex(prevItem => prevItem.id === item.id);


      if (itemIndex !== -1) {
        const prevItems = prev.items;

        if (operation === 'plus') {
          prevItems[itemIndex].count = (prevItems[itemIndex].count || 0) + 1
        } else {
          const newCount = (prevItems[itemIndex].count || 0) - 1;

          if(newCount <= 0) {
            prevItems[itemIndex].count = 0
            handleRemove(prevItems[itemIndex].id);
          } else {
            prevItems[itemIndex].count = newCount;
          }

        }

        return { items: [...prevItems] }
      }
      return ({
        items: [...prev?.items, { ...item, count: 1 }]
      })
    });
  };

  const addedItemVerify = (id: number) => !!cart.items.find((item: IMovie) => item.id === id);

  const getCountMovieInCart = (id: number) => {
    const cardItem = cart.items.find((item: IMovie) => item.id === id);

    return cardItem?.count || 0;
  };

  const getCountAllMoviesInCart = () => {
    const allMovies = cart.items.reduce((acc, item: IMovie) => {
      return acc += item.count || 0;
    }, 0);

    return allMovies;
  }

  const getTotalCartValue = () => {
    const total = cart.items.reduce((acc, item: IMovie) => {
      return acc += ((item.price || 0) * (item.count || 0));
    }, 0);

    return total
  }

  const handleRemove = (id: number) => {
    const newItems = cart.items.filter(item => item.id !== id);

    setCart(prev => ({ ...prev, items: newItems }))
  };

  const handleFinish = () => {
    setCart({ items: []})
  }

  return (
    <CartContext.Provider value={{ cart, updateCart, addedItemVerify, getCountMovieInCart, getCountAllMoviesInCart, handleRemove, getTotalCartValue, handleFinish }}>
      {prop.children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext) as ContextType;

export default useCart;