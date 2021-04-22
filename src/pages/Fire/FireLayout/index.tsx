import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Container } from './styles';

import Header from '../components/Header';
import Main from '../components/Main';
import SlideDrawer from '../components/SlideDrawer';
import Backdrop from '../components/Backdrop';
import Routes from './routes';

import { CartProvider } from '../../../context/CartContext';
const FireLayout: React.FC = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Container>
          <Header />
          <SlideDrawer />
          <Backdrop />
          <Main />
          {/* <Routes /> */}
        </Container>
      </CartProvider>
    </BrowserRouter>
  );
}

export default FireLayout;