import { Container } from './styles';

export function OrderSummary() {
  return (
    <Container>
      <div>
        <span>Total items</span>
        <span>$ 29.70</span>
      </div>
      <div>
        <span>Delivery fee</span>
        <span>$ 29.70</span>
      </div>
      <div>
        <strong>Total</strong>
        <strong>$ 29.70</strong>
      </div>
    </Container>
  );
}
