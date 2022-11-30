import { ShoppingCart } from 'phosphor-react';

import { InputNumber } from '../../../../components/InputNumber';

import { Container, Header, FormContainer } from './styles';

import americanoImage from '../../../../assets/coffees/americano.png';
import { FormEvent } from 'react';

const MIN_QUANTITY = 1;
const MAX_QUANTITY = 99;

export function CoffeeCard() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const element = event.currentTarget.elements.namedItem(
      'coffee',
    ) as HTMLInputElement;

    console.log(element.value);
  }

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
        <form onSubmit={handleSubmit}>
          <InputNumber name="coffee" min={MIN_QUANTITY} max={MAX_QUANTITY} />
          <button type="submit">
            <ShoppingCart weight="fill" size={22} />
          </button>
        </form>
      </FormContainer>
    </Container>
  );
}
