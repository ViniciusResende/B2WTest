import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useCart } from '../../../../context/CartContext';
import { GlobalContext } from '../../../../context/GlobalContext';

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
  MiddleBottomContainer,
  MiddleHeader,
  BottomHeader,
  SearchBox,
  SearchButton, 
  SearchIcon,
  } from './styles';

const Header: React.FC = () => {
  const { storeType } = useContext(GlobalContext);

  const { changeCartHandler, getNumberOfItems } = useCart();
  const [cartClass, setCartClass] = useState('');

  const onScroll = useCallback(() => {
    if(window.scrollY > 95){
      setCartClass('outOfTop');
    } else if(window.scrollY <= 95) {
      setCartClass('');
    }
  }, [window.scrollY])
  
  useEffect(() => {
    document.addEventListener('scroll', onScroll);
  
    return function cleanup() {
      document.removeEventListener('scroll', onScroll);
    }
  }, [onScroll]);

  return (
    <Container>
      <TopHeader>
        <BarsIcon />
        <Logo> 
          {storeType === 'fire' ? 'FireMania' : 'AquaMania'}
        </Logo>
        <ProfileIcon />
        <MarketIcon />
        <FavoriteIcon />
        <MarketButton className={cartClass}>
          {getNumberOfItems() !== 0 && (
            <div>
              {getNumberOfItems() < 10 ? getNumberOfItems() : <span>9+</span>}
            </div>
          )}          
          <ShopBasket onClick={() => changeCartHandler()}/>
        </MarketButton>
      </TopHeader>
      <MiddleBottomContainer>
        <MiddleHeader>
          <span>Empresa</span>
          <span>Capture</span>
          <span>Batalhas</span>
          <span>Ginásios</span>
        </MiddleHeader>
        <BottomHeader>
          <SearchBox>
            <input type="text" placeholder="Busque aqui seu Poke"/>
            <SearchButton>
              <SearchIcon />
            </SearchButton>
          </SearchBox>
        </BottomHeader>
      </MiddleBottomContainer>      
    </Container>
  );
}

export default Header;