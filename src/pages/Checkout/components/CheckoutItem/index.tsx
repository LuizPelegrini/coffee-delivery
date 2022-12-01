import { Trash } from 'phosphor-react';
import { Coffee } from '../../../../@types/coffee';
import { formatPrice } from '../../../../utils';

import { InputNumber } from '../../../../components/InputNumber';

import { Container, CoffeeDetails, RemoveButton } from './styles';

interface CheckoutItemProps {
  coffee: Coffee;
  quantity: number;
}

export function CheckoutItem({ coffee, quantity }: CheckoutItemProps) {
  return (
    <Container>
      <img src={coffee.image} alt="Mug with coffee" />

      <CoffeeDetails>
        <span>{coffee.name}</span>
        <div>
          <InputNumber min={1} max={99} value={quantity} />
          <RemoveButton type="button">
            <Trash size={16} />
            <span>Remove</span>
          </RemoveButton>
        </div>
      </CoffeeDetails>

      <strong>$ {formatPrice(coffee.priceInCents)}</strong>
    </Container>
  );
}
