import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Container } from './styles';

import Header from '../components/Header';
import Main from '../components/Main';
import FinalizateModal from '../components/FinalizateModal';
import AcknowledgmentModal from '../components/AcknowledgmentModal';
import SlideDrawer from '../components/SlideDrawer';
import BackdropDrawer from '../components/BackdropDrawer';
import Routes from './routes';

import { CartProvider } from '../../../context/CartContext';
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
          <Main />
          {/* <Routes /> */}
        </Container>
      </CartProvider>
    </BrowserRouter>
  );
}

export default FireLayout;