import React, { useEffect, useState } from 'react';

import { Container } from './styles';

import InfiniteScroll from '../InfiniteScroll';
import PokeCard from '../PokeCard';

import { api } from '../../../../api/api';
import Cart from '../Cart';
import { useCart } from '../../../../context/CartContext';

interface PokemonData {
  pokemon: {
    name: string;
    url: string;
  }
}

const Main: React.FC = () => {
  const { pokemonsIds } = useCart();

  const [pokemon, setPokemon] = useState<string[]>([]);
  const [visiblePokemon, setVisiblePokemon] = useState<string[]>([]);

  async function retrievePokemon() {
    // TODO: get /type/fire URI by parameter
    const { data } = await api.get('/type/fire');
    setPokemon(data.pokemon.map((pokemonData: PokemonData) => pokemonData.pokemon.name));
  };

  const loadMorePokemon = () => {
    const index = visiblePokemon.length;
    const amount = 2; //turn it in a variable to fit better by the resolution
    setVisiblePokemon(
      visiblePokemon.concat(
        pokemon.slice(index, index + amount)
      )
    );
  };
  
  const loadMoreHandler = () => {
    loadMorePokemon();
  }
  
  useEffect(() => {    
    retrievePokemon();    
  }, []);

  useEffect(() => {
    if (pokemon.length > 0) {
      loadMorePokemon();
    }
  }, [pokemon]);
  return (
    <InfiniteScroll 
      classReference="poke-card" 
      amountLoaded={visiblePokemon.length} 
      loadMoreHandler={loadMoreHandler}
    >
      <Container>
        {visiblePokemon && visiblePokemon.map((pokemonName) => {
          return <PokeCard key={pokemonName} name={pokemonName}/>
        })}
      </Container>
    </InfiniteScroll>
    // <Cart />
  );
}

export default Main;