import styled, { css } from 'styled-components';
import { 
  Bars,
  PersonCircle,
  Storefront,
  FavoriteBorder,
  ShoppingBasket,
  Search,
  ArrowToLeft,
  UpArrowAlt,
} from '../../../../styles/icons';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--primary);

  padding: 1rem 2rem;

  @media (min-width: 768px){
    padding: 1rem 4rem;
  }
`;

export const TopHeader  = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-right: 3rem;
  
  > svg {
    transition: all 0.4s ease;
    &:hover {
      filter: brightness(0.7);
    }
  }

  @media (min-width: 768px){
    padding-right: 4.5rem;
  }

  @media (min-width: 1024px){
    padding-right: 9rem;
  }

  @media (min-width: 1366px) { 
    justify-content: flex-end;
    padding-right: 2rem;
  }
`;
export const Logo = styled.div`
  font-weight: bold;
  @media (min-width: 768px){
    font-size: 2.5rem;
  }
  @media (min-width: 1366px) { 
    justify-self: flex-start;
    margin-right: auto;
  }
`;

export const MarketButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0.5rem;
  right: 2rem;
  padding: 0.5rem;
  border-radius: 50%;
  background: var(--primary);

  cursor: pointer;
  transition: all 0.3s ease;
  
  &.outOfTop{
    right: .2rem;
  }


  > div {
    display: flex;
    align-items: center;
    justify-content:center;

    background: var(--star);
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 50%;
    font-size: 0.75rem;
    font-weight: bold;

    color: var(--black);

    > span {
      color: var(--black);
    }

    position: absolute;
    top: -4px;
    left: -8px;
  }

  > svg {
    transition: all 0.4s ease;
    &:hover {
      filter: brightness(0.8);
    }
  }

  @media (min-width: 768px) {
    top: 1.25rem;
    right: 3rem;
    &.outOfTop{
      top: 0.5rem;
    }
  }

  @media (min-width: 1024px) {
    right: 3.5rem;
  }
`;

export const MiddleBottomContainer = styled.div`
  display: flex; 
  flex-direction: column;

  @media (min-width: 1366px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    border-top: 1px solid var(--white);
    border-bottom: 1px solid var(--white);
    padding: .5rem 0;
  }
`;

export const MiddleHeader = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex; 
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--white);
    border-top: 1px solid var(--white);
    padding: 0.75rem 0;
    

    > span {
      text-transform: uppercase;
      font-size: 1.25rem;
      cursor: pointer;  
      transition: all 0.4s ease;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
  @media (min-width: 1366px) {
    width: 100%;
    border: 0;
    padding: 0;
  }
`;

export const BottomHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1rem;

  @media (min-width: 768px) {
    margin-top: .5rem;
  }

  @media (min-width: 1366px) {
    width: 100%;
    max-width: 500px;
    margin-top: 0;
  }

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
    @media (min-width: 768px){
      font-size: 1.5rem;
    }
  }
  @media (min-width: 1366px) {
    max-width: 450px;
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

export const ReturnButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 10px;
  left: 10px;

  padding: 0.5rem;
  border-radius: 50%;
  background: var(--medium-light-gray);

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover{
    filter: brightness(0.8);
  }

`;

export const ToTopButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: -60px;
  right: 10px;

  padding: 0.5rem;
  border-radius: 50%;
  background: var(--medium-light-gray);

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover{
    filter: brightness(0.8);
  }

  &.outOfTop{
    bottom: 10px;
  }
`;


const iconCss = css`
  flex-shrink: 0;

  width: 20px;
  height: 20px;
  color: var(--white);

  cursor: pointer;

  @media (min-width: 768px){
    width: 30px;
    height: 30px;
  }

  @media (min-width: 1366px) { 
    margin-right: 1rem;
  }
`;

export const BarsIcon = styled(Bars)`${iconCss}
  @media (min-width: 768px){
    display: none;
  }
`;
export const ProfileIcon = styled(PersonCircle)`${iconCss}`;
export const MarketIcon = styled(Storefront)`${iconCss}`;
export const FavoriteIcon = styled(FavoriteBorder)`${iconCss}`;
export const ArrowLeftIcon = styled(ArrowToLeft)`${iconCss}
  @media (min-width: 1366px) { 
    margin-right: 0;
  }
`;
export const ArrowUpIcon = styled(UpArrowAlt)`${iconCss}
  @media (min-width: 1366px) { 
    margin-right: 0;
  }
`;
export const ShopBasket = styled(ShoppingBasket)`${iconCss}
  @media (min-width: 1366px) { 
    margin-right: 0;
  }
`;
export const SearchIcon = styled(Search)`${iconCss}
  @media (min-width: 1366px) { 
    margin-right: 0;
  }
`;