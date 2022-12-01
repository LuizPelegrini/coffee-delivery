import { createContext, ReactNode, useState } from 'react';
import { Coffee } from '../@types/coffee';
interface ShoppingCartProviderProps {
  children: ReactNode;
}

interface ShoppingCartCoffee extends Coffee {
  quantity: number;
}

interface ShoppingCartContextType {
  coffees: ShoppingCartCoffee[];
  addCoffee: (coffee: Coffee, quantity: number) => void;
  removeCoffee: (id: string) => void;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [coffees, setCoffees] = useState<ShoppingCartCoffee[]>([]);

  function addCoffee(coffee: Coffee, quantity: number) {
    const existentCoffeeInShoppingCart = coffees.find(
      (shoppingCartCoffee) => shoppingCartCoffee.id === coffee.id,
    );

    // if coffee is not in Shopping Cart, then create a new one
    if (!existentCoffeeInShoppingCart) {
      const newCoffee = {
        ...coffee,
        quantity,
      };

      setCoffees((state) => [...state, newCoffee]);
    } else {
      // if coffee is already in ShoppingCart then overwrite its quantity
      setCoffees((state) =>
        state.map((shoppingCartCoffee) => {
          if (shoppingCartCoffee.id === coffee.id) {
            return {
              ...shoppingCartCoffee,
              quantity,
            };
          }

          return shoppingCartCoffee;
        }),
      );
    }
  }

  function removeCoffee(id: string) {
    setCoffees((state) => {
      return state.filter((coffee) => coffee.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider value={{ coffees, addCoffee, removeCoffee }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
