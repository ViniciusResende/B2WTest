import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../api/api";
import { Pokemon } from '../pages/Fire/components/PokeCard';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdatePokemonAmount {
  pokemonId: number;
  amount: number;
}

interface CartContextData {
  cartIsInDisplay: boolean; 
  pokemonsIds: number[];
  changeCartHandler: () => void;
  addPokemon: (pokemonId: number) => void;
  removePokemon: (pokemonId: number) => void;
  // updatePokemonAmount: ({ pokemonId, amount }: UpdatePokemonAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [pokemonsIds, setPokemonsIds] = useState<number[]>([]);
  const [cartIsInDisplay, setCartIsInDisplay] = useState(false);

  const addPokemon =  (pokemonId: number) => {
    const newPokemonArr = [...pokemonsIds, pokemonId];
    setPokemonsIds(newPokemonArr);
  }

  const removePokemon =  (pokemonId: number) => {
    const newPokemonArr = pokemonsIds.filter(e => e !== pokemonId);
    setPokemonsIds(newPokemonArr);
  }

  const changeCartHandler = () => {
    setCartIsInDisplay(prev => !prev);
  }

  return (
    <CartContext.Provider
      value={{
        cartIsInDisplay,
        pokemonsIds,
        changeCartHandler,
        addPokemon,
        removePokemon,
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