import React from 'react';
import { useCart } from '../../../../context/CartContext';

import { 
  Container,
  TopHeader, 
  BarsIcon,
  Logo,
  MarketButton,
  ProfileIcon,
  MarketIcon,
  FavoriteIcon,
  ShopBasket,
  BottomHeader,
  SearchBox,
  SearchButton, 
  SearchIcon,
  } from './styles';

const Header: React.FC = () => {
  const { changeCartHandler } = useCart();
  return (
    <Container>
      <TopHeader>
        <BarsIcon />
        <Logo> 
          FireMania
        </Logo>
        <ProfileIcon />
        <MarketIcon />
        <FavoriteIcon />
        <MarketButton>
          <ShopBasket onClick={() => changeCartHandler()}/>
        </MarketButton>
      </TopHeader>
      <BottomHeader>
        <SearchBox>
          <input type="text" placeholder="Busque aqui seu Poke"/>
          <SearchButton>
            <SearchIcon />
          </SearchButton>
        </SearchBox>
      </BottomHeader>
    </Container>
  );
}

export default Header;