import { NavLink } from 'react-router-dom';
import { MapPin, ShoppingCart } from 'phosphor-react';

import { Container, LocationContainer, ActionsContainer } from './styles';

import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <Container>
      <nav>
        <NavLink to="/" end title="Home">
          <img src={logo} alt="" />
        </NavLink>
        <ActionsContainer>
          <LocationContainer>
            <MapPin weight="fill" size={22} />
            Petaling Jaya, MY
          </LocationContainer>
          <NavLink to="/checkout" end title="Checkout">
            <ShoppingCart weight="fill" size={22} />
          </NavLink>
        </ActionsContainer>
      </nav>
    </Container>
  );
}
