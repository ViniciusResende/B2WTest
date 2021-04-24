import { createContext, ReactNode, useState } from 'react';

interface GlobalProviderProps {
  children: ReactNode;
}



interface GlobalContextData {
  storeType: string | null;
  handleFireStoreClick: () => void;
  handleWaterStoreClick: () => void;
}

export const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData);

export function GlobalProvider({ children }: GlobalProviderProps): JSX.Element{
  const [storeType, setStoreType] = useState<string | null>(localStorage.getItem("@PokeMania:storeType"));

  const handleFireStoreClick = () => {
    setStoreType('fire');
    localStorage.setItem("@PokeMania:storeType", 'fire');
  }

  const handleWaterStoreClick = () => {
    setStoreType('water');
    localStorage.setItem("@PokeMania:storeType", 'water');
  }
  
  return (
    <GlobalContext.Provider
      value={{
        storeType,
        handleFireStoreClick,
        handleWaterStoreClick
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}