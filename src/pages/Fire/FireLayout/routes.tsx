import { Switch, Route } from 'react-router-dom';

import Main from '../components/Main';
import Cart from '../components/Cart';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
};

export default Routes;
