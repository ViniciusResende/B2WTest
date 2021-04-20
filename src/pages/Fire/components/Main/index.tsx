import React, { useEffect, useState } from 'react';

import { Container } from './styles';

import PokeCard from '../PokeCard';

import { api } from '../../../../api/api';

export interface Pokemon {
  id: number;
  name: string;
  picture: string;
}

const Main: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  
  useEffect(() => {
    async function loadPokemons() { //Tipar essa parte
      const { data } = await api.get('/type/fire');
      const FirePokemonsArray = data.pokemon;
      let pokemons = [];
      for(let i = 0; i < 10; i++){
        const pokemonName = FirePokemonsArray[i].pokemon.name;
        const { data } = await api.get(`/pokemon/${pokemonName}`);
        const actualPokemon = {
          id: data.id,
          name: data.name,
          picture: data.sprites.front_default,
        }
        pokemons.push(actualPokemon);
      }
      // FirePokemonsArray.forEach(async (pokemon) => {
      //   const pokemonName = pokemon.pokemon.name;
      //   const { data } = await api.get(`/pokemon/${pokemonName}`);
      //   const actualPokemon = {
      //     id: data.id,
      //     name: data.name,
      //     picture: data.sprites.front_default,
      //   }
      //   pokemons.push(actualPokemon);
      // });
      setPokemons(pokemons);
    }
    loadPokemons();    
  }, []);
  return (
    <Container>
      {pokemons && pokemons.map((pokemon) => {
        return <PokeCard key={pokemon.id} id={pokemon.id} name={pokemon.name} picture={pokemon.picture}/>
      })}
    </Container>
  );
}

export default Main;