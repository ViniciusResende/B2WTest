import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import { GlobalProvider } from './context/GlobalContext';

import InitialScreen from './pages/InitialScreen';
import FireLayout from './pages/Fire/FireLayout';
import WaterLayout from './pages/Fire/WaterLayout';
import GrassLayout from './pages/Fire/GrassLayout';

function App() {
  return (
    <>
    <GlobalProvider>
      <BrowserRouter>
        <Route path="/" exact component={InitialScreen} />
        <Route path="/fire" exact component={FireLayout} />
        <Route path="/water" exact component={WaterLayout} />
        <Route path="/grass" exact component={GrassLayout} />
        <GlobalStyles />
      </BrowserRouter>
    </GlobalProvider>
    </>
  );
}

export default App;
