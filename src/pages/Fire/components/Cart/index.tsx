import React from 'react';

import { 
  Container, 
  PokemonBox, 
  TopInformation, 
  BottomMenu, 
  Switcher 
} from './styles';

const Cart: React.FC = () => {
  return (
    <Container>
      <h2>Minha cesta</h2>
      <PokemonBox>
        <TopInformation>

        </TopInformation>
        <BottomMenu>
          <Switcher>
            <button>-</button>
            <span>2</span>
            <button></button>
          </Switcher>
          <strong></strong>
        </BottomMenu>
      </PokemonBox>
    </Container>
  );
}

export default Cart;