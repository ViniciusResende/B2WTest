import GlobalStyles from './styles/GlobalStyles';
import { GlobalProvider } from './context/GlobalContext';

import Routes from './routes';

function App() {
  return (
    <GlobalProvider>
      <Routes />
      <GlobalStyles />
    </GlobalProvider>
  );
}

export default App;
