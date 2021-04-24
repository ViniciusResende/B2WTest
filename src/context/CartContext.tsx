import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { GlobalContext } from "./GlobalContext";

interface CartProviderProps {
  children: ReactNode;
}

interface PokemonAmount {
  pokemonId: number;
  amount: number;
  pokemonPrice: number;
}

interface CartContextData {
  cartIsInDisplay: boolean; 
  finalizeModalIsInDisplay: boolean;
  acknowledgmentModalIsInDisplay: boolean;
  pokemonsIds: number[];
  totalPrice: number;
  changeCartHandler: () => void;
  backToTop: () => void;
  finalizeModalIsInDisplayHandler: () => void;
  finalizePurchaseHanlder: () => void;
  restartShop: () => void;
  addPokemon: (pokemonId: number) => void;
  growPokemonAmount: (pokemonId: number) => void;
  decreasePokemonAmount: (pokemonId: number) => void;
  changePokemonPrice: (pokemonId: number, value: number) => void;
  getAmount: (pokemonId: number) => number;
  getNumberOfItems: () => number;
  // updatePokemonAmount: ({ pokemonId, amount }: UpdatePokemonAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const { storeType } = useContext(GlobalContext);
  const [pokemonsIds, setPokemonsIds] = useState<number[]>(() => {
    const storagedIds = localStorage.getItem(`@PokeMania:pokemonsIds${storeType}`);
    if(storagedIds){
      return JSON.parse(storagedIds);
    }

    return [];
  });
  const [pokemonsAmount, setPokemonsAmount] = useState<PokemonAmount[]>(() => {
    const storagedAmount = localStorage.getItem(`@PokeMania:pokemonAmount${storeType}`);
    if(storagedAmount){
      return JSON.parse(storagedAmount);
    }

    return [];
  })
  const [cartIsInDisplay, setCartIsInDisplay] = useState(false);
  const [finalizeModalIsInDisplay, setFinalizeModalIsInDisplay] = useState(false);
  const [acknowledgmentModalIsInDisplay, setAcknowledgmentModalIsInDisplay] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let accumulator = 0;
    pokemonsAmount.map((pokemon) => {
      accumulator = accumulator + (pokemon.pokemonPrice * pokemon.amount);
    })
    setTotalPrice(accumulator);
  }, [pokemonsAmount])

  const addPokemon =  (pokemonId: number) => {
    if(!pokemonsIds.includes(pokemonId)){
      const newPokemonArr = [...pokemonsIds, pokemonId];
      setPokemonsIds(newPokemonArr);
      localStorage.setItem(
        `@PokeMania:pokemonsIds${storeType}`, 
        JSON.stringify(newPokemonArr)
      );
      const newPokemonAmount = [...pokemonsAmount, {
        pokemonId,
        amount: 1,
        pokemonPrice: 0,
      }];
      setPokemonsAmount(newPokemonAmount);
      localStorage.setItem(
        `@PokeMania:pokemonAmount${storeType}`, 
        JSON.stringify(newPokemonAmount)
      );
    } else {
      growPokemonAmount(pokemonId);
    }
  }

  const growPokemonAmount = (pokemonId: number) => {
    setPokemonsAmount( prev => {
      const newAmount = prev.map(item => (
        item.pokemonId === pokemonId
          ?{...item, amount: item.amount + 1}
          : item
      ));
      localStorage.setItem(
        `@PokeMania:pokemonAmount${storeType}`, 
        JSON.stringify(newAmount)
      );
      return newAmount;
    });
  }

  const decreasePokemonAmount =  (pokemonId: number) => {
    setPokemonsAmount( prev => {
      const newAmount = prev.reduce((ack, item) => {
        if(item.pokemonId === pokemonId){
          if(item.amount === 1) {
            setPokemonsIds( prev => {
              const newArr = prev.filter((pokeId) => (
                pokeId !== pokemonId
              )) 
              localStorage.setItem(
                `@PokeMania:pokemonsIds${storeType}`, 
                JSON.stringify(newArr)
              );
              return newArr;
            })
            return ack
          }
          return [...ack, {...item, amount: item.amount -1}]
        } else {
          return [...ack, item]
        }
      }, [] as PokemonAmount [])
      localStorage.setItem(
        `@PokeMania:pokemonAmount${storeType}`, 
        JSON.stringify(newAmount)
      );
      return newAmount;
    });
  }
  
  const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const changeCartHandler = () => {
    if(window.innerWidth < 1366){
      setCartIsInDisplay(prev => !prev);
    } else {
      backToTop();
    }
  }


  const finalizeModalIsInDisplayHandler = () => {
    setFinalizeModalIsInDisplay(prev => !prev);
  }

  const changePokemonPrice = (pokemonId: number, value: number) => {
    setPokemonsAmount( prev => {
      const newAmount = prev.map(item => (
        item.pokemonId === pokemonId
          ?{...item, pokemonPrice: value}
          : item
      ));
      localStorage.setItem(
        `@PokeMania:pokemonAmount${storeType}`, 
        JSON.stringify(newAmount)
      );
      return newAmount;
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
    setPokemonsIds([]);
    localStorage.setItem(
      `@PokeMania:pokemonsIds${storeType}`, 
      ''
    );
    setPokemonsAmount([]);
    localStorage.setItem(
      `@PokeMania:pokemonAmount${storeType}`, 
      ''
    );
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
        backToTop,
        finalizeModalIsInDisplayHandler,
        finalizePurchaseHanlder,
        restartShop,
        addPokemon,
        growPokemonAmount,
        decreasePokemonAmount,
        changePokemonPrice,
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