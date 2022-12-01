import { Trash } from 'phosphor-react';
import { Coffee } from '../../../../@types/coffee';

// import InputNumber from '../../../../components/InputNumber';

import { Container, CoffeeDetails, RemoveButton } from './styles';

interface CheckoutItemProps {
  coffee: Coffee;
}

export function CheckoutItem({ coffee }: CheckoutItemProps) {
  return (
    <Container>
      <img src={coffee.image} alt="Mug with coffee" />

      <CoffeeDetails>
        <span>Traditional Expresso</span>
        <div>
          {/* <InputNumber /> */}
          <RemoveButton type="button">
            <Trash size={16} />
            <span>Remove</span>
          </RemoveButton>
        </div>
      </CoffeeDetails>

      <strong>$ 9.90</strong>
    </Container>
  );
}
