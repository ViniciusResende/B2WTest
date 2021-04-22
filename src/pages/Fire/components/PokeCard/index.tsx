import React, { useState, useEffect, useCallback } from 'react';

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

import { api } from '../../../../api/api';
import defaultPokemon from '../../../../assets/emptyPokemon.png';
import { useCart } from '../../../../context/CartContext';

export interface Pokemon {
  id: number;
  name: string;
  picture: string;
  lvl: number;
  price: number;
  stars: number;
}

type PokeCardProps = {
  name: string;
}

const PokeCard: React.FC<PokeCardProps> = (props: PokeCardProps) => {
  const { addPokemon } = useCart();

  const [pokemon, setPokemon] = useState<Pokemon>();
  const [stars, setStars] = useState<string[]>([]);

  const generateStars = useCallback((numberOfStars: number) => {//see the more than 1 star generation
    for(let i = 0; i < 5; i++){
      let newArray = stars;
      if(i < numberOfStars){
        newArray.push('star')
        setStars(newArray)
      } else {
        newArray.push('black')
        setStars(newArray)
      }
    }
  },[])

  const loadPokemon = useCallback(async () =>{
    const { data } = await api.get(`/pokemon/${props.name}`);
    // const starsNumber = Math.round(Math.random() * 5);
    const starsNumber = 4;
    generateStars(starsNumber);
    setPokemon({
      id: data.id,
      name: data.name,
      picture: data.sprites.front_default,
      // lvl: Math.floor(Math.random() * 101),
      // price: Math.floor(Math.random() * 1001),
      lvl: 30,
      price: 100,
      stars: starsNumber
    })
  },[props.name]);


  useEffect(() => {
    loadPokemon(); 
  }, [loadPokemon]);

  function handleAddPokemon(id: number) {
    addPokemon(id);
  }

  return (
    	<Container className="poke-card">
        <Head>
          <h2>{pokemon ? pokemon.name : 'Loading...'}</h2>
          <Dot />
          <h2>Lvl: {pokemon ? pokemon.lvl : '???'}</h2>
        </Head>
        <Body>
          {pokemon ? <img src={pokemon.picture || defaultPokemon} alt={pokemon.name}/> : <img src={defaultPokemon} alt='Default Pokemon'/>}
          <StarContainer>
            {
              pokemon && stars ? (
                stars.map((star, index) => (
                  <StarIcon key={index} style={{fill: `var(--${star})`}}/>
                ))
              ) :
              (
                <>
                  <StarIcon style={{fill: 'var(--black)'}}/>
                  <StarIcon style={{fill: 'var(--black)'}}/>
                  <StarIcon style={{fill: 'var(--black)'}}/>
                  <StarIcon style={{fill: 'var(--black)'}}/>
                  <StarIcon style={{fill: 'var(--black)'}}/>
                </>
              )
            }
          </StarContainer>
          <PriceContainer>
            <h2>R$ {pokemon ? pokemon.price : '000'},00</h2>
            <span>ou 10x de R${pokemon ? Math.ceil(pokemon.price/10) : '00'},00</span>
          </PriceContainer>
        </Body>
        <Footer>
          <button
            //@ts-ignore
            onClick={() => handleAddPokemon(pokemon.id || 0)}
          >
            Adicionar ao Carrinho
          </button>
        </Footer>
      </Container>
  );
}

export default PokeCard;