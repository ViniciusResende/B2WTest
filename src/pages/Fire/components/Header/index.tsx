import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
  ReturnButton,
  ToTopButton,
  SearchBox,
  SearchButton, 
  SearchIcon,
  ArrowLeftIcon,
  ArrowUpIcon,
  } from './styles';

const Header: React.FC = () => {
  const { storeType, handleFilterValueChange } = useContext(GlobalContext);
  const { changeCartHandler, getNumberOfItems, backToTop } = useCart();
  
  const [cartClass, setCartClass] = useState('');
  const [storeTitle, setStoreTitle] = useState(() => {
    if(storeType === 'fire'){
      return 'FireMania';
    } else if(storeType === 'water'){
      return 'AquaMania';
    } else if(storeType === 'grass'){
      return 'LeafMania';
    }
  });


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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFilterValueChange(e.target.value);
  }

  return (
    <Container>
      <TopHeader>
        <BarsIcon />
        <Logo> 
          {storeTitle}
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
            <input 
              type="text" 
              placeholder="Busque aqui seu Poke"
              onChange={handleInputChange}
            />
            <SearchButton>
              <SearchIcon />
            </SearchButton>
          </SearchBox>
        </BottomHeader>
      </MiddleBottomContainer>  
      <ReturnButton as={Link} to="/">
        <ArrowLeftIcon />
      </ReturnButton>   
      <ToTopButton 
        className={cartClass}
        onClick={backToTop}
      >
        <ArrowUpIcon />
      </ToTopButton>  
    </Container>
  );
}

export default Header;