import React from 'react';

import { 
  Container,
  Head,
  Dot,
  Body,
  Footer,
  StarContainer,
  StarIcon,
  PriceContainer 
} from './styles';

import { Pokemon } from '../Main';


const PokeCard: React.FC<Pokemon> = (props: Pokemon) => {
  return (
    	<Container>
        <Head>
          <h2>{props.name}</h2>
          <Dot />
          <h2>Lvl: ???</h2>
        </Head>
        <Body>
          <img src={props.picture} alt="Pokemon Name"/>
          <StarContainer>
            <StarIcon style={{fill: 'var(--star)'}}/>
            <StarIcon style={{fill: 'var(--star)'}}/>
            <StarIcon style={{fill: 'var(--star)'}}/>
            <StarIcon style={{fill: 'var(--star)'}}/>
            <StarIcon style={{fill: 'var(--black)'}}/>
          </StarContainer>
          <PriceContainer>
            <h2>R$ 100,00</h2>
            <span>ou 10x de R$10,00 sem juros</span>
          </PriceContainer>
        </Body>
        <Footer>
          <button>
            Adicionar ao Carrinho
          </button>
        </Footer>
      </Container>
  );
}

export default PokeCard;