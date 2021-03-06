import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { 
  Container, 
  Content,
  PokeManiaButton,
  WaterIcon,
  FireIcon,
  LeafIcon
} from './styles';

import { GlobalContext } from '../../context/GlobalContext';

const InitialScreen: React.FC = () => {
  const { handleFireStoreClick, handleWaterStoreClick, handleGrassStoreClick } = useContext(GlobalContext);

  return (
    <Container>
      <Content>
        <h2>Para qual loja PokeMania gostaria de ir?</h2>
        <PokeManiaButton 
          className="water" 
          as={Link} 
          to="/water"
          onClick={() => handleWaterStoreClick()}
        >
          <WaterIcon />
          AquaMania
        </PokeManiaButton>
        <PokeManiaButton 
          className="fire" 
          as={Link} 
          to="/fire"
          onClick={() => handleFireStoreClick()}
        >
          <FireIcon />
          FireMania
        </PokeManiaButton>
        <PokeManiaButton 
          className="grass" 
          as={Link} 
          to="/grass"
          onClick={() => handleGrassStoreClick()}
        >
          <LeafIcon />
          LeafMania
        </PokeManiaButton>
      </Content>
    </Container>
  );
}

export default InitialScreen;