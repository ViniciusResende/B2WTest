import { createContext, ReactNode, useState } from 'react';

interface GlobalProviderProps {
  children: ReactNode;
}



interface GlobalContextData {
  storeType: 'water' | 'fire' | undefined;
  handleFireStoreClick: () => void;
  handleWaterStoreClick: () => void;
}

export const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData);

export function GlobalProvider({ children }: GlobalProviderProps): JSX.Element{
  const [storeType, setStoreType] = useState<'water' | 'fire'>('water');

  const handleFireStoreClick = () => {
    setStoreType('fire');
  }

  const handleWaterStoreClick = () => {
    setStoreType('water');
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