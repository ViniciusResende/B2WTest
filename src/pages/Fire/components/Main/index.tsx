import React, { useContext, useEffect, useState } from 'react';

import { Container } from './styles';

import InfiniteScroll from '../InfiniteScroll';
import PokeCard from '../PokeCard';

import { api } from '../../../../api/api';
import { GlobalContext } from '../../../../context/GlobalContext';

interface PokemonData {
  pokemon: {
    name: string;
    url: string;
  }
}

const Main: React.FC = () => {
  const { storeType, filterValue } = useContext(GlobalContext);
  const [pokemon, setPokemon] = useState<string[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<string[]>([]);
  const [visiblePokemon, setVisiblePokemon] = useState<string[]>([]);

  async function retrievePokemon() {
    const { data } = await api.get(`/type/${storeType}`);
    setPokemon(data.pokemon.map((pokemonData: PokemonData) => pokemonData.pokemon.name));
  };

  const loadMorePokemon = () => {
    const amount = 2; //turn it in a variable to fit better by the resolution
    if(!filterValue){
      const index = visiblePokemon.length;
      setVisiblePokemon(
        visiblePokemon.concat(
          pokemon.slice(index, index + amount)
        )
      );
    } else {
      const index = visiblePokemon.length;
      setVisiblePokemon(
        visiblePokemon.concat(
          filteredPokemons.slice(index, index + amount)
        )
      );
    }
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
  }, [pokemon, filterValue]);

  useEffect(() => {
    if(filterValue){
      const filteredArray = pokemon.filter((pokemon) =>{
        return pokemon.includes(filterValue);
      });
      setFilteredPokemons(filteredArray);
    }
  }, [filterValue, pokemon]);

  useEffect(() => {
    setVisiblePokemon([]);
  }, [filterValue])

  return (
    <InfiniteScroll 
      classReference="poke-card" 
      amountLoaded={visiblePokemon.length} 
      loadMoreHandler={loadMoreHandler}
    >
      <Container
        variants={{
          hidden: {
            opacity: 1, scale: 0
          },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.2
            }
          }
        }}
        initial="hidden"
        animate="visible"
      >
        {visiblePokemon && visiblePokemon.map((pokemonName) => {
          return <PokeCard key={pokemonName} name={pokemonName}/>
        })}
      </Container>
    </InfiniteScroll>
    // <Cart />
  );
}

export default Main;