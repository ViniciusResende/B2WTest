import styled, { css } from 'styled-components';
import { 
  StarFill, 
  Minus, 
  Plus, 
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

export const PokemonBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  margin-top: 0.5rem;

  border: 1px solid var(--ligh-gray);
`;
export const TopInformation = styled.div`
  display: flex;

  > img {
    width: 75px;
    margin-right: 1rem;
  }
`;
export const SideInformation = styled.div`
  display: flex;
  flex-direction: column;
  > h4 {
    color: var(--dark-gray);
  }
  > span {
    color: var(--medium-light-gray);
    font-size: 0.5rem;

    > strong {
      color: var(--outline);
    }
  }
`;
export const BottomMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding-top: 1rem;
`;
export const Switcher = styled.div`
  border: 2px solid var(--ligh-gray);
  display: flex;
  align-items: center;
  justify-content: space-around;

  > button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 50%;
    padding: 0.25rem;
    color: var(--outline);
    outline: 0;

    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: var(--ligh-gray);
    }
  }

  > span {
    padding: 0.25rem;
    font-size: 0.75rem;
    line-height: 0.75rem;
    color: var(--outline); 
  }
`;
export const StarContainer = styled.div``;
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

  &:hover{
    background: var(--fire-hover)
  }
`;

export const StarIcon = styled(StarFill)`
  width: 10px;
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

const IconsCss = css`
  width: 10px;
  fill: var(--outline);
  background: rgba(0, 0, 0, 0);
`

export const MinusIcon = styled(Minus)`${IconsCss}`;
export const PlusIcon = styled(Plus)`${IconsCss}`;