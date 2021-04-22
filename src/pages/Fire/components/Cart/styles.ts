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
  max-width: 500px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h2 {
    color: var(--dark-gray);
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
`;
export const ConfirmButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 0;

  background: var(--fire);
  padding: 0.6rem;
  border-radius: 4px;
  
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover:not(:disabled){
    background: var(--fire-hover)
  }

  &:disabled{
    opacity: 0.8;
  }
`;

export const BasketIcon = styled(ShoppingBasket)`
  width: 15px;
  fill: var(--white);
  margin-right: 1rem;
`;
export const CloseIcon = styled(Close)`
  width: 20px;
  margin-right: 5px;  
  > path {
    color: var(--medium-light-gray);
  }
`;