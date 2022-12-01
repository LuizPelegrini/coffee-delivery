import { createContext, ReactNode, useState } from 'react';

interface ShoppingCartProviderProps {
  children: ReactNode;
}

interface Coffee {
  id: string;
  quantity: number;
}

interface ShoppingCartContextType {
  coffees: Coffee[];
  addCoffee: (id: string, quantity: number) => void;
  removeCoffee: (id: string) => void;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  function addCoffee(id: string, quantity: number) {
    const existentCoffeeIndex = coffees.findIndex((coffee) => coffee.id === id);

    if (existentCoffeeIndex < 0) {
      const newCoffee = {
        id,
        quantity,
      };

      setCoffees((state) => [...state, newCoffee]);
    } else {
      setCoffees((state) =>
        state.map((coffee) => {
          if (coffee.id === id) {
            return {
              ...coffee,
              quantity,
            };
          }

          return coffee;
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
