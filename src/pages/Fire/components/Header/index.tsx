import React from 'react';

import { 
  Container,
  TopHeader, 
  BarsIcon,
  Logo,
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
        <ShopBasket />
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