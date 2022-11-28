import { CurrencyDollar, MapPinLine } from 'phosphor-react';
import { Container, COLORS_MAP } from './styles';

const ICON_MAPPER = {
  pin: <MapPinLine size={22} />,
  dollar: <CurrencyDollar size={22} />,
};

interface CheckoutHeaderProps {
  icon: keyof typeof ICON_MAPPER;
  iconColor: keyof typeof COLORS_MAP;
  title: string;
  description: string;
}

export function CheckoutHeader({
  icon,
  iconColor,
  title,
  description,
}: CheckoutHeaderProps) {
  return (
    <Container iconColor={iconColor}>
      {ICON_MAPPER[icon]}
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Container>
  );
}
