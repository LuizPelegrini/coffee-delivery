import { useContext } from 'react';
import { ShoppingCartContext } from '../../../../contexts/ShoppingCartContext';
import { DELIVERY_FEE_IN_CENTS, formatPrice } from '../../../../utils';
import { Container } from './styles';

export function OrderSummary() {
  const { coffees } = useContext(ShoppingCartContext);

  const costInCents = coffees.reduce((acc: number, elem) => {
    return (acc += elem.priceInCents * elem.quantity);
  }, 0);

  const deliveryFee = costInCents > 0 ? DELIVERY_FEE_IN_CENTS : 0;

  const totalCost = costInCents + deliveryFee;

  return (
    <Container>
      <div>
        <span>Total items</span>
        <span>$ {formatPrice(costInCents)}</span>
      </div>
      <div>
        <span>Delivery fee</span>
        <span>$ {formatPrice(deliveryFee)}</span>
      </div>
      <div>
        <strong>Total</strong>
        <strong>$ {formatPrice(totalCost)}</strong>
      </div>
    </Container>
  );
}
