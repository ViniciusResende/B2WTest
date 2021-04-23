import React from 'react';

import { 
  Container, 
  Header,
  PriceContainer,
  ConfirmationArea,
  ConfirmationContent,
  ConfirmButton,
  BasketIcon,
  CloseIcon,
} from './styles';

import PokemonBox from '../PokemonBox';
import { useCart } from '../../../../context/CartContext';

interface CartProps {
  cartClass?: string;
}
const Cart: React.FC<CartProps> = (props) => {
  const { changeCartHandler, pokemonsIds, totalPrice, finalizeModalIsInDisplayHandler } = useCart();
  return (
    <Container className={props?.cartClass}>
      <Header>
        <h2>Minha cesta</h2>
        <CloseIcon onClick={() => changeCartHandler()}/>
      </Header>
      {pokemonsIds.map((pokemonId) => (
        <PokemonBox key={pokemonId} pokemonId={pokemonId}/>
      ))}
      <ConfirmationArea>
        <ConfirmationContent>
          <h3>Total:</h3>
          <PriceContainer>
            <strong> R$ {totalPrice},00 </strong>
            <span>ou 10x de R${totalPrice/10},00</span>
          </PriceContainer>
          <ConfirmButton disabled={totalPrice === 0} onClick={() => finalizeModalIsInDisplayHandler()}>
            <BasketIcon />
            <strong>Confirmar Pedido</strong>
          </ConfirmButton>
          <a onClick={() => changeCartHandler()}>Adicionar mais pokemons</a>
        </ConfirmationContent>
      </ConfirmationArea>
    </Container>
  );
}

export default Cart;