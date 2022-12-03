import { Trash } from 'phosphor-react';
import { Coffee } from '../../../../@types/coffee';
import { formatPrice } from '../../../../utils';

import { InputNumber } from '../../../../components/InputNumber';

import { Container, CoffeeDetails, RemoveButton } from './styles';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../../../contexts/ShoppingCartContext';

interface CheckoutItemProps {
  coffee: Coffee;
  quantity: number;
}

export function CheckoutItem({ coffee, quantity }: CheckoutItemProps) {
  const { removeCoffee, upsertCoffee } = useContext(ShoppingCartContext);

  function handleChange(quantity: number) {
    upsertCoffee(coffee, quantity);
  }

  function handleRemove() {
    removeCoffee(coffee.id);
  }

  return (
    <Container>
      <img src={coffee.image} alt="Mug with coffee" />

      <CoffeeDetails>
        <span>{coffee.name}</span>
        <div>
          <InputNumber
            min={1}
            max={99}
            value={quantity}
            onCustomChange={handleChange}
          />
          <RemoveButton type="button" onClick={handleRemove}>
            <Trash size={16} />
            <span>Remove</span>
          </RemoveButton>
        </div>
      </CoffeeDetails>

      <strong>$ {formatPrice(coffee.priceInCents * quantity)}</strong>
    </Container>
  );
}
