import { createContext, ReactNode, useState } from 'react';

interface GlobalProviderProps {
  children: ReactNode;
}

interface GlobalContextData {
  storeType: string | null;
  filterValue: string;
  handleFireStoreClick: () => void;
  handleWaterStoreClick: () => void;
  handleGrassStoreClick: () => void;
  handleFilterValueChange: (value: string) => void;
  clearFilter: () => void;
}

export const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData);

export function GlobalProvider({ children }: GlobalProviderProps): JSX.Element{
  const [storeType, setStoreType] = useState<string | null>(localStorage.getItem("@PokeMania:storeType"));
  const [filterValue, setFilterValue] = useState('');

  const handleFireStoreClick = () => {
    setStoreType('fire');
    localStorage.setItem("@PokeMania:storeType", 'fire');
  }

  const handleWaterStoreClick = () => {
    setStoreType('water');
    localStorage.setItem("@PokeMania:storeType", 'water');
  }

  const handleGrassStoreClick = () => {
    setStoreType('grass');
    localStorage.setItem("@PokeMania:storeType", 'grass');
  }
  
  const handleFilterValueChange = (value: string) => {
    setFilterValue(value);
  }

  const clearFilter = () => {
    setFilterValue('');
  }

  return (
    <GlobalContext.Provider
      value={{
        storeType,
        filterValue,
        handleFireStoreClick,
        handleWaterStoreClick,
        handleGrassStoreClick,
        handleFilterValueChange,
        clearFilter
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}