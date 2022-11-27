import { MapPinLine } from 'phosphor-react';

import { CheckoutItem } from './components/CheckoutItem';

export function Checkout() {
  return (
    <form>
      <div>
        <header>
          <MapPinLine />
          <div>
            <h2>Delivery Address</h2>
            <p>Provide address for delivery</p>
          </div>
        </header>
      </div>

      <aside>
        <CheckoutItem />
      </aside>
    </form>
  );
}
