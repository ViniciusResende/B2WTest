import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import InitialScreen from './pages/InitialScreen';
import FireLayout from './pages/Stores/FireLayout';
import WaterLayout from './pages/Stores/WaterLayout';
import GrassLayout from './pages/Stores/GrassLayout';
const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={InitialScreen} />
        <Route path="/fire" exact component={FireLayout} />
        <Route path="/water" exact component={WaterLayout} />
        <Route path="/grass" exact component={GrassLayout} />
      </Switch>     
    </BrowserRouter>
  );
}

export default Routes;