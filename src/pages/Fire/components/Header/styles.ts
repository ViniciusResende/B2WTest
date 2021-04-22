import styled, { css } from 'styled-components';
import { 
  Bars,
  PersonCircle,
  Storefront,
  FavoriteBorder,
  ShoppingBasket,
  Search
} from '../../../../styles/icons';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--fire);

  padding: 1rem 0.25rem;
`;

export const TopHeader  = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding-right: 3rem;
  
  > svg {
    transition: all 0.4s ease;
    &:hover {
      filter: brightness(0.7);
    }
  }
`;
export const Logo = styled.div`
  font-weight: bold;
`;

export const MarketButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  padding: 0.5rem;
  border-radius: 50%;
  background: var(--fire);
  top: 5px;
  right: 15px;
`;

export const BottomHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--white);
  border-radius: 4px;
  width: 100%;
  > input {
    background: var(--white);
    color: var(--black);
    outline: 0;
    padding: 0.25rem;
    width: 100%;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.15rem 0.25rem;
  
  outline: 0;
  transition: all 0.4s ease;
  &:hover {
    filter: brightness(0.8);
  }
`;


const iconCss = css`
  flex-shrink: 0;

  width: 20px;
  height: 20px;
  color: var(--white);
`;

export const BarsIcon = styled(Bars)`${iconCss}`;
export const ProfileIcon = styled(PersonCircle)`${iconCss}`;
export const MarketIcon = styled(Storefront)`${iconCss}`;
export const FavoriteIcon = styled(FavoriteBorder)`${iconCss}`;
export const ShopBasket = styled(ShoppingBasket)`${iconCss}`;
export const SearchIcon = styled(Search)`${iconCss}`;