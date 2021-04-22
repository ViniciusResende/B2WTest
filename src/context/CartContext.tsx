import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../api/api";
import { Pokemon } from '../pages/Fire/components/PokeCard';

interface CartProviderProps {
  children: ReactNode;
}

interface PokemonAmount {
  pokemonId: number;
  amount: number;
}

interface CartContextData {
  cartIsInDisplay: boolean; 
  pokemonsIds: number[];
  totalPrice: number;
  changeCartHandler: () => void;
  addPokemon: (pokemonId: number) => void;
  removePokemon: (pokemonId: number) => void;
  changeTotalPriceHandler: (value: number) => void;
  getAmount: (pokemonId: number) => number;
  // updatePokemonAmount: ({ pokemonId, amount }: UpdatePokemonAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [pokemonsIds, setPokemonsIds] = useState<number[]>([]);
  const [pokemonsAmount, setPokemonsAmount] = useState<PokemonAmount[]>([])
  const [cartIsInDisplay, setCartIsInDisplay] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  // console.log(pokemonsAmount);

  const addPokemon =  (pokemonId: number) => {
    if(!pokemonsIds.includes(pokemonId)){
      const newPokemonArr = [...pokemonsIds, pokemonId];
      setPokemonsIds(newPokemonArr);
      const newPokemonAmount = [...pokemonsAmount, {
        pokemonId,
        amount: 1,
      }];
      setPokemonsAmount(newPokemonAmount);
    } else {
      growPokemonAmount(pokemonId);
    }
  }

  const growPokemonAmount = (pokemonId: number) => {
    setPokemonsAmount( prev => {
      return prev.map(item => (
        item.pokemonId === pokemonId
          ?{...item, amount: item.amount + 1}
          : item
      ));
    });
  }

  const removePokemon =  (pokemonId: number) => {
    const newPokemonArr = pokemonsIds.filter(e => e !== pokemonId);
    setPokemonsIds(newPokemonArr);
  }

  const changeCartHandler = () => {
    setCartIsInDisplay(prev => !prev);
  }

  const changeTotalPriceHandler = (value: number) => {
    setTotalPrice(prev => prev + value);
  }

  const getAmount = (pokemonId: number) => {
    let amount = 0;
    pokemonsAmount.filter((pokemon) => {
      if(pokemon.pokemonId === pokemonId ){
        amount = pokemon.amount;
      }
    })
    return amount;
  }

  return (
    <CartContext.Provider
      value={{
        cartIsInDisplay,
        pokemonsIds,
        totalPrice,
        changeCartHandler,
        addPokemon,
        removePokemon,
        changeTotalPriceHandler,
        getAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}