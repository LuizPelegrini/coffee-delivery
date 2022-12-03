import { createContext, ReactNode, useReducer } from 'react';

import { Coffee } from '../@types/coffee';
import {
  ShoppingCartCoffee,
  shoppingCartReducer,
} from '../reducers/shoppingCart/reducer';

import {
  upsertCoffeeAction,
  removeCoffeeAction,
} from '../reducers/shoppingCart/action';

interface ShoppingCartContextType {
  coffees: ShoppingCartCoffee[];
  upsertCoffee: (coffee: Coffee, quantity: number) => void;
  removeCoffee: (id: string) => void;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType);

interface ShoppingCartProviderProps {
  children: ReactNode;
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [shoppinCartState, dispatch] = useReducer(shoppingCartReducer, {
    coffees: [],
  });

  function upsertCoffee(coffee: Coffee, quantity: number) {
    dispatch(upsertCoffeeAction(coffee, quantity));
  }

  function removeCoffee(id: string) {
    dispatch(removeCoffeeAction(id));
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        coffees: shoppinCartState.coffees,
        upsertCoffee,
        removeCoffee,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
