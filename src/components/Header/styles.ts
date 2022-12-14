import styled from 'styled-components';

export const Container = styled.header`
  padding: 2rem 0;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > a {
      line-height: 0;
    }
  }
`;

interface ActionsContainerProps {
  cartItemsQuantity: number;
}

export const ActionsContainer = styled.div<ActionsContainerProps>`
  display: flex;
  align-items: stretch;
  gap: 0.75rem;
  font-size: 0.875rem;
  height: 2.375rem;

  & > a {
    color: ${(props) => props.theme['yellow-dark']};
    background-color: ${(props) => props.theme['yellow-light']};
    padding: 0.5rem;
    border-radius: 6px;
    display: flex;
    align-items: center;

    position: relative;

    &::after {
      content: ${(props) =>
        props.cartItemsQuantity > 0 ? `'${props.cartItemsQuantity}'` : ''};
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: -45%;
      right: -45%;
      transform: translate(-50%, 50%);
      width: 1.125rem;
      height: 1.125rem;
      font-weight: bold;
      font-size: 0.75rem;
      border-radius: 50%;
      background-color: ${(props) => props.theme['yellow-dark']};
      color: ${(props) => props.theme.white};
    }
  }
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 0.25rem;
  color: ${(props) => props.theme.purple};
  background-color: ${(props) => props.theme['purple-light']};
  padding: 0.625rem 0.5rem;
  border-radius: 6px;
`;
