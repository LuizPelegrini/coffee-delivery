import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  > div {
    display: flex;
    justify-content: space-between;
    line-height: 1.3;
  }

  > div:last-child {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`;
