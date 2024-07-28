import { createContext, ReactNode, useContext, useState } from "react";

type CartProviderProps = {
  children: ReactNode
}

type CartItem = {
  id: number
  qty: number
}

type CartContext = {
  getItemQty: (id: number) => number
  increaseItem: (id: number) => void
  decreaseItem: (id: number) => void
  removeItem: (id: number) => void
}

const CartContext = createContext({} as CartContext);


export function useCartContext() {
  return useContext(CartContext)
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItem, setCartItem] = useState<CartItem[]>([]);

  function getItemQty(id: number) {
    return cartItem.find((item) => item.id === id)?.qty || 0;
  };

  function increaseItem(id: number) {
    setCartItem((currItems) => {
      if(currItems.find((item) => item.id === id) == null) {
        return [...currItems, {id, qty: 1}];
      } else {
        return currItems.map((item) => {
          if(item.id === id) {
            return { ...item, qty: item.qty + 1 }
          } else {
            return item;
          }
        })
      }
    })
  };

  function decreaseItem(id: number) {
    setCartItem((currItems) => {
      if(currItems.find((item) => item.id === id)?.qty == 1) {
        return currItems.filter((item) => item.id !== id)
      } else {
        return currItems.map((item) => {
          if(item.id === id) {
            return { ...item, qty: item.qty - 1 }
          } else {
            return item;
          }
        })
      }
    })
  };

  function removeItem(id: number) {
    setCartItem((currItems) => {
      return currItems.filter((item) => item.id !== id)
    })
  };

  return <CartContext.Provider value={{ getItemQty, increaseItem, decreaseItem, removeItem }}>{ children }</CartContext.Provider>
}