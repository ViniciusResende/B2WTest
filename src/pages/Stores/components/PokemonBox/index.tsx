import React, { useCallback, useEffect, useState } from 'react';

import { 
  Container, 
  TopInformation,
  SideInformation,
  StarContainer,
  StarIcon,
  BottomMenu,
  Switcher,
  MinusIcon,
  PlusIcon,
  PriceContainer
} from './styles';

import defaultPokemon from '../../../../assets/emptyPokemon.png';
import { api } from '../../../../services/api/api';
import { Pokemon } from '../PokeCard';
import { useCart } from '../../../../context/CartContext';

interface PokemonBoxProps {
  pokemonId: number;
}
const PokemonBox: React.FC<PokemonBoxProps> = ({ pokemonId }: PokemonBoxProps) => {
  const { getAmount, growPokemonAmount , decreasePokemonAmount, changePokemonPrice } = useCart();

  const [pokemon, setPokemon] = useState<Pokemon>();
  const [stars, setStars] = useState<string[]>([]);
  const [pokeAmount, setPokeAmount] = useState(getAmount(pokemonId));
  const [amountCache, setAmountCache] = useState(0);
  const generateStars = useCallback((numberOfStars: number) => {
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
    const { data } = await api.get(`/pokemon/${pokemonId}`);
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
  },[pokemonId]);

  useEffect(() => {
    loadPokemon();
  }, [loadPokemon]);

  useEffect(()=>{
    setPokeAmount(getAmount(pokemonId));    
  },  [getAmount]);

  useEffect(() => {
    if(pokemon) {
      changePokemonPrice(pokemonId, pokemon.price);
    }    
  }, [pokemon]);

  return (
    <Container
      variants={{
        hidden: {
          y: 20,
          opacity: 0
        },
        visible: {
          y: 0,
          opacity: 1
        }
      }}
    >
        <TopInformation>
          {pokemon ? <img src={pokemon.picture || defaultPokemon} alt={pokemon.name}/> : <img src={defaultPokemon} alt='Default Pokemon'/>}
          <SideInformation>
            <h4>Name: {pokemon ? pokemon.name : 'Loading...'}</h4>
            <h4>Lvl: {pokemon ? pokemon.lvl : '???'}</h4>
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
            <span>vendido e entregue por <strong>pokestore.com</strong></span>
          </SideInformation>
        </TopInformation>
        <BottomMenu>
          <Switcher>
            <button onClick={() => decreasePokemonAmount(pokemonId)}>
              <MinusIcon/>
            </button>
            <span>{pokeAmount.toString()}</span>
            <button onClick={() => growPokemonAmount(pokemonId)}>
              <PlusIcon/>
            </button>
          </Switcher>
          <PriceContainer>
            <strong> R$ {pokemon ? (pokeAmount*pokemon.price) : '000'},00 </strong>
            <span>ou 10x de R${pokemon ? Math.ceil((pokeAmount*pokemon.price)/10) : '00'},00</span>
          </PriceContainer>
        </BottomMenu>      
    </Container>
  );
}

export default PokemonBox;