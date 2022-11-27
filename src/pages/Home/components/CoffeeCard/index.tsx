import { ShoppingCart } from 'phosphor-react';
import { InputNumber } from '../../../../components/InputNumber';

import { Container, Header, FormContainer } from './styles';

import americanoImage from '../../../../assets/coffees/americano.png';

export function CoffeeCard() {
  return (
    <Container>
      <Header>
        <img src={americanoImage} alt="Mug filled with expresso coffee" />
        <strong>Traditional</strong>
        <h3>Traditional Expresso</h3>
        <p>Traditional coffee shot with ground beans</p>
      </Header>

      <FormContainer>
        <strong>9.90</strong>
        <form>
          <InputNumber />
          <button type="submit">
            <ShoppingCart weight="fill" size={22} />
          </button>
        </form>
      </FormContainer>
    </Container>
  );
}
