import React from 'react';

import { Container } from './styles';

import Cart from '../Cart';
import { useCart } from '../../../../context/CartContext';

const SlideDrawer: React.FC = () => {
  const { cartIsInDisplay } = useCart();

  return (
    <>
      {cartIsInDisplay ? (
        <Container className="open">
          <Cart />
        </Container>
      ): (
        <Container className="closed">
          <Cart />
        </Container>
    )}
    </>
  );
}

export default SlideDrawer;