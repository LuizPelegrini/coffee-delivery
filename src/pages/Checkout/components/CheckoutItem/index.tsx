import { Trash } from 'phosphor-react';

import { InputNumber } from '../../../../components/InputNumber';

import coffeeImage from '../../../../assets/coffees/americano.png';
import { Container, CoffeeDetails, RemoveButton } from './styles';

export function CheckoutItem() {
  return (
    <Container>
      <img src={coffeeImage} alt="Mug with coffee" />

      <CoffeeDetails>
        <span>Traditional Expresso</span>
        <div>
          <InputNumber />
          <RemoveButton type="button">
            <Trash size={16} />
            <span>Remove</span>
          </RemoveButton>
        </div>
      </CoffeeDetails>

      <strong>9.90</strong>
    </Container>
  );
}
