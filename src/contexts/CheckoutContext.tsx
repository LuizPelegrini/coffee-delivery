import { createContext, ReactNode, useState } from 'react';

interface Address {
  streetName: string;
  city: string;
  state: string;
  number: string;
}

export enum PaymentMethod {
  // eslint-disable-next-line no-unused-vars
  DEBIT = 'Debit Card',
  // eslint-disable-next-line no-unused-vars
  CREDIT = 'Credit Card',
  // eslint-disable-next-line no-unused-vars
  CASH = 'Cash',
}

interface CheckoutContextType {
  address: Address | null;
  paymentMethod: PaymentMethod | null;
  changeAddress: (address: Address) => void;
  changePaymentMethod: (payment: PaymentMethod) => void;
}

export const CheckoutContext = createContext({} as CheckoutContextType);

interface CheckoutProviderProps {
  children: ReactNode;
}

export function CheckoutProvider({ children }: CheckoutProviderProps) {
  const [address, setAddress] = useState<Address | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(
    null,
  );

  function changeAddress(address: Address) {
    setAddress(address);
  }

  function changePaymentMethod(payment: PaymentMethod) {
    setPaymentMethod(payment);
  }

  return (
    <CheckoutContext.Provider
      value={{
        address,
        paymentMethod,
        changeAddress,
        changePaymentMethod,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}
