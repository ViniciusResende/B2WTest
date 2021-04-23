import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Container, CenteredContent } from './styles';

import Header from '../components/Header';
import Main from '../components/Main';
import FinalizateModal from '../components/FinalizateModal';
import AcknowledgmentModal from '../components/AcknowledgmentModal';
import SlideDrawer from '../components/SlideDrawer';
import BackdropDrawer from '../components/BackdropDrawer';
import Routes from './routes';

import { CartProvider } from '../../../context/CartContext';
import Cart from '../components/Cart';
const FireLayout: React.FC = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Container>
          <Header />
          <FinalizateModal />
          <AcknowledgmentModal />
          <SlideDrawer />
          <BackdropDrawer />
          <CenteredContent>
            <Main />
            <Cart cartClass='cart'/>
          </CenteredContent>
          {/* <Routes /> */}
        </Container>
      </CartProvider>
    </BrowserRouter>
  );
}

export default FireLayout;