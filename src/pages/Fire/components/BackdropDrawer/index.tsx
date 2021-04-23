import React from 'react';
import { useCart } from '../../../../context/CartContext';

import { Container } from './styles';

const BackdropDrawer: React.FC = () => {
  const { cartIsInDisplay, changeCartHandler } = useCart();
  if(cartIsInDisplay){
    return <Container onClick={() => changeCartHandler()}/>
  }

  return <div />;
}

export default BackdropDrawer;