import React from 'react';

import { Container, CenteredContent } from './styles';

import Header from '../components/Header';
import Main from '../components/Main';
import FinalizateModal from '../components/FinalizateModal';
import AcknowledgmentModal from '../components/AcknowledgmentModal';
import SlideDrawer from '../components/SlideDrawer';
import BackdropDrawer from '../components/BackdropDrawer';


import { CartProvider } from '../../../context/CartContext';
import Cart from '../components/Cart';

interface LayoutProps {
  class: string;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <CartProvider>
      <Container className={props.class}>
        <Header />
        <FinalizateModal />
        <AcknowledgmentModal />
        <SlideDrawer />
        <BackdropDrawer />
        <CenteredContent>
          <Main />
          <Cart cartClass='cart'/>
        </CenteredContent>
      </Container>
    </CartProvider>
  );
}

export default Layout;