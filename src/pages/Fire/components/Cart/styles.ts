import styled from 'styled-components';
import { 
  ShoppingBasket,
  Close 
} from '../../../../styles/icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.35rem;
  margin: 0 auto;
  width: 100%;
  max-width: 500px;

  @media (min-width: 1366px){
    border-left: 1px solid var(--medium-light-gray);
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h2 {
    color: var(--dark-gray);
  }

  @media (min-width: 768px) {
    > h2 {
      font-size: 2rem;
    }
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  > span {
    color: var(--medium-light-gray);
    font-size: 0.5rem;
  }

  > strong {
    color: var(--dark-gray);
  }
`;

export const ConfirmationArea = styled.div`
  padding: 0.5rem;
  background: var(--light-gray);
  
  /* @media (min-width: 1366px){
    position: sticky;
  } */
  //TODO: Try to make the confirmation area sticky
`;
export const ConfirmationContent = styled.div`
  border-top: 1px solid var(--medium-light-gray);
  border-bottom: 1px solid var(--medium-light-gray);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > h3 {
    color: var(--dark-gray);
  }

  > div {
    align-self: flex-end;
    text-align: end;

    > strong {
      font-size: 1.25rem;
    }
  }

  > a {
    color: var(--medium-light-gray);
    font-size: 0.65rem;
    text-align: center;
    margin-bottom: 0.25rem;
  }

  @media (min-width: 768px) {
    > h3 {
      font-size: 1.75rem;
    }

    > div {
      > strong {
        font-size: 1.5rem;
      }

      > span {
        font-size: .75rem;
      }
    }

    > a {
      font-size: .75rem;
    }
  }
`;
export const ConfirmButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 0;

  background: var(--primary);
  padding: 0.6rem;
  border-radius: 4px;
  
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled){
    filter: brightness(0.8);
  }

  &:disabled{
    opacity: 0.8;
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const BasketIcon = styled(ShoppingBasket)`
  width: 15px;
  fill: var(--white);
  margin-right: 1rem;

  @media (min-width: 768px) {
    width: 20px;
  }
`;
export const CloseIcon = styled(Close)`
  width: 20px;
  margin-right: 5px;  
  > path {
    color: var(--medium-light-gray);
  }
`;