import { PaymentMethod } from '../contexts/CheckoutContext';

export const formatPrice = (priceInCents: number): string => {
  const p = Math.floor(priceInCents / 100);
  const c = String(priceInCents % 100).padStart(2, '0');

  return `${p}.${c}`;
};

export const mapPaymentMethodToName = (paymentMethod: PaymentMethod) => {
  if (paymentMethod === PaymentMethod.DEBIT) {
    return 'Debit Card';
  }

  if (paymentMethod === PaymentMethod.CREDIT) {
    return 'Credit Card';
  }

  if (paymentMethod === PaymentMethod.CASH) {
    return 'Cash';
  }
};

export const DELIVERY_FEE_IN_CENTS = 300;
