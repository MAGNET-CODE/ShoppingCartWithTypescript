import { createContext, ReactNode, useContext } from "react";

type CartProviderProps = {
  children: ReactNode
}

const CartContext = createContext({});


export function useCartContext() {
  return useContext(CartContext)
}

export function CartProvider({ children }: CartProviderProps) {
  return <CartContext.Provider value={{}}>{ children }</CartContext.Provider>
}