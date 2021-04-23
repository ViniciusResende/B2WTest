import { createContext, ReactNode, useContext, useState, useEffect } from "react";

interface CartProviderProps {
  children: ReactNode;
}

interface PokemonAmount {
  pokemonId: number;
  amount: number;
  totalPokemonPrice: number;
}

interface CartContextData {
  cartIsInDisplay: boolean; 
  finalizeModalIsInDisplay: boolean;
  acknowledgmentModalIsInDisplay: boolean;
  pokemonsIds: number[];
  totalPrice: number;
  changeCartHandler: () => void;
  finalizeModalIsInDisplayHandler: () => void;
  finalizePurchaseHanlder: () => void;
  restartShop: () => void;
  addPokemon: (pokemonId: number) => void;
  growPokemonAmount: (pokemonId: number) => void;
  decreasePokemonAmount: (pokemonId: number) => void;
  changePokemonTotalPrice: (pokemonId: number, value: number) => void;
  getAmount: (pokemonId: number) => number;
  getNumberOfItems: () => number;
  // updatePokemonAmount: ({ pokemonId, amount }: UpdatePokemonAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [pokemonsIds, setPokemonsIds] = useState<number[]>([]);
  const [pokemonsAmount, setPokemonsAmount] = useState<PokemonAmount[]>([])
  const [cartIsInDisplay, setCartIsInDisplay] = useState(false);
  const [finalizeModalIsInDisplay, setFinalizeModalIsInDisplay] = useState(false);
  const [acknowledgmentModalIsInDisplay, setAcknowledgmentModalIsInDisplay] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let accumulator = 0;
    pokemonsAmount.map((pokemon) => {
      accumulator = accumulator + pokemon.totalPokemonPrice;
    })
    setTotalPrice(accumulator);
  }, [pokemonsAmount])

  const addPokemon =  (pokemonId: number) => {
    if(!pokemonsIds.includes(pokemonId)){
      const newPokemonArr = [...pokemonsIds, pokemonId];
      setPokemonsIds(newPokemonArr);
      const newPokemonAmount = [...pokemonsAmount, {
        pokemonId,
        amount: 1,
        totalPokemonPrice: 0,
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

  const decreasePokemonAmount =  (pokemonId: number) => {
    setPokemonsAmount( prev => (
      prev.reduce((ack, item) => {
        if(item.pokemonId === pokemonId){
          if(item.amount === 1) {
            setPokemonsIds( prev => {
              const newArr = prev.filter((pokeId) => (
                pokeId !== pokemonId
              )) 
              return newArr;
            })
            return ack
          }
          return [...ack, {...item, amount: item.amount -1}]
        } else {
          return [...ack, item]
        }
      }, [] as PokemonAmount [])
    ));
  }

  const changeCartHandler = () => {
    if(window.innerWidth < 1366){
      setCartIsInDisplay(prev => !prev);
    } else {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }

  const finalizeModalIsInDisplayHandler = () => {
    setFinalizeModalIsInDisplay(prev => !prev);
  }

  const changePokemonTotalPrice = (pokemonId: number, value: number) => {
    setPokemonsAmount( prev => {
      return prev.map(item => (
        item.pokemonId === pokemonId
          ?{...item, totalPokemonPrice: item.totalPokemonPrice + value}
          : item
      ));
    });
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

  const getNumberOfItems = () => {
    let accumulator = 0;
    pokemonsAmount.map((pokemon) => {
      accumulator = accumulator + pokemon.amount;
    })
    return accumulator;
  }

  const finalizePurchaseHanlder = () => {
    setFinalizeModalIsInDisplay(false);
    setAcknowledgmentModalIsInDisplay(true);
  }

  const restartShop = () => {
    setAcknowledgmentModalIsInDisplay(false);
  }

  return (
    <CartContext.Provider
      value={{
        cartIsInDisplay,
        finalizeModalIsInDisplay,
        acknowledgmentModalIsInDisplay,
        pokemonsIds,
        totalPrice,
        changeCartHandler,
        finalizeModalIsInDisplayHandler,
        finalizePurchaseHanlder,
        restartShop,
        addPokemon,
        growPokemonAmount,
        decreasePokemonAmount,
        changePokemonTotalPrice,
        getAmount,
        getNumberOfItems
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