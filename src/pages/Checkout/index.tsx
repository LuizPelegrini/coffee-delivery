import { MapPinLine } from 'phosphor-react';

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
        <div>
          <img src="" alt="" />
          <div>
            <header>
              <span>Traditional Expresso</span>
              <strong>9.90</strong>
            </header>
          </div>
        </div>
      </aside>
    </form>
  );
}
