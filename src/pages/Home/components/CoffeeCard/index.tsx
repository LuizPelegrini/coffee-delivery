import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import americanoImage from '../../../../assets/coffees/americano.png';

import { Container, Header, FormContainer } from './styles';

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
          <label>
            <button type="button">
              <Minus size={14} weight="bold" />
            </button>
            <input type="number" min={1} max={99} />
            <button type="button">
              <Plus size={14} weight="bold" />
            </button>
          </label>
          <button type="submit">
            <ShoppingCart weight="fill" size={22} />
          </button>
        </form>
      </FormContainer>
    </Container>
  );
}
