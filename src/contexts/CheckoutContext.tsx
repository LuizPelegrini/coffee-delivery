import { createContext, ReactNode, useState } from 'react';

interface Address {
  streetName: string;
  city: string;
  state: string;
  number: string;
}

export enum PaymentMethod {
  // eslint-disable-next-line no-unused-vars
  DEBIT = 'debit',
  // eslint-disable-next-line no-unused-vars
  CREDIT = 'credit',
  // eslint-disable-next-line no-unused-vars
  CASH = 'cash',
}

interface Purchase {
  id: string;
  address: Address;
  paymentMethod: PaymentMethod;
}

interface CheckoutContextType {
  purchases: Purchase[];
  createPurchase: (address: Address, payment: PaymentMethod) => string;
}

export const CheckoutContext = createContext({} as CheckoutContextType);

interface CheckoutProviderProps {
  children: ReactNode;
}

export function CheckoutProvider({ children }: CheckoutProviderProps) {
  const [purchases, setPurchases] = useState<Purchase[]>([]);

  function createPurchase(address: Address, payment: PaymentMethod) {
    const id = String(Date.now());
    const newPurchase: Purchase = {
      id,
      address,
      paymentMethod: payment,
    };

    setPurchases((state) => [...state, newPurchase]);

    return id;
  }

  return (
    <CheckoutContext.Provider
      value={{
        purchases,
        createPurchase,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}
