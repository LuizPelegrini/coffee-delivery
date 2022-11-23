import { NavLink } from 'react-router-dom';

import { Container } from './styles';

import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <Container>
      <nav>
        <NavLink to="/" end title="Home">
          <img src={logo} alt="" />
        </NavLink>
        <div>
          <span>Petaling Jaya, MY</span>
          <NavLink to="/checkout" end title="Checkout">
            Checkout
          </NavLink>
        </div>
      </nav>
    </Container>
  );
}
