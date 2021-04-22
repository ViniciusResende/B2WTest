import React from 'react';

import { 
  Container, 
  Header,
  PokemonBox, 
  TopInformation, 
  BottomMenu, 
  Switcher,
  SideInformation,
  StarContainer,
  PriceContainer,
  ConfirmationArea,
  ConfirmationContent,
  ConfirmButton,
  StarIcon,
  MinusIcon,
  PlusIcon,
  BasketIcon,
  CloseIcon
} from './styles';

import defaultPokemon from '../../../../assets/emptyPokemon.png';
import { useCart } from '../../../../context/CartContext';


const Cart: React.FC = () => {
  const { changeCartHandler } = useCart();
  return (
    <Container>
      <Header>
        <h2>Minha cesta</h2>
        <CloseIcon onClick={() => changeCartHandler()}/>
      </Header>
      <PokemonBox>
        <TopInformation>
          <img src={defaultPokemon} alt='Default Pokemon'/>
          <SideInformation>
            <h4>Name: Charmander</h4>
            <h4>Lvl: 93</h4>
            <StarContainer>
              <StarIcon style={{fill: 'var(--black)'}}/>
              <StarIcon style={{fill: 'var(--black)'}}/>
              <StarIcon style={{fill: 'var(--black)'}}/>
              <StarIcon style={{fill: 'var(--black)'}}/>
              <StarIcon style={{fill: 'var(--black)'}}/>
            </StarContainer>
            <span>vendido e entregue por <strong>pokestore.com</strong></span>
          </SideInformation>
        </TopInformation>
        <BottomMenu>
          <Switcher>
            <button>
              <MinusIcon/>
            </button>
            <span>2</span>
            <button>
              <PlusIcon/>
            </button>
          </Switcher>
          <PriceContainer>
            <strong> R$ 430,00 </strong>
            <span>ou 10x de R$43,00</span>
          </PriceContainer>
        </BottomMenu>
      </PokemonBox>
      <PokemonBox>
        <TopInformation>
          <img src={defaultPokemon} alt='Default Pokemon'/>
          <SideInformation>
            <h4>Name: Charmander</h4>
            <h4>Lvl: 93</h4>
            <StarContainer>
              <StarIcon style={{fill: 'var(--black)'}}/>
              <StarIcon style={{fill: 'var(--black)'}}/>
              <StarIcon style={{fill: 'var(--black)'}}/>
              <StarIcon style={{fill: 'var(--black)'}}/>
              <StarIcon style={{fill: 'var(--black)'}}/>
            </StarContainer>
            <span>vendido e entregue por <strong>pokestore.com</strong></span>
          </SideInformation>
        </TopInformation>
        <BottomMenu>
          <Switcher>
            <button>
              <MinusIcon/>
            </button>
            <span>2</span>
            <button>
              <PlusIcon/>
            </button>
          </Switcher>
          <PriceContainer>
            <strong> R$ 430,00 </strong>
            <span>ou 10x de R$43,00</span>
          </PriceContainer>
        </BottomMenu>
      </PokemonBox>
      <PokemonBox>
        <TopInformation>
          <img src={defaultPokemon} alt='Default Pokemon'/>
          <SideInformation>
            <h4>Name: Charmander</h4>
            <h4>Lvl: 93</h4>
            <StarContainer>
              <StarIcon style={{fill: 'var(--black)'}}/>
              <StarIcon style={{fill: 'var(--black)'}}/>
              <StarIcon style={{fill: 'var(--black)'}}/>
              <StarIcon style={{fill: 'var(--black)'}}/>
              <StarIcon style={{fill: 'var(--black)'}}/>
            </StarContainer>
            <span>vendido e entregue por <strong>pokestore.com</strong></span>
          </SideInformation>
        </TopInformation>
        <BottomMenu>
          <Switcher>
            <button>
              <MinusIcon/>
            </button>
            <span>2</span>
            <button>
              <PlusIcon/>
            </button>
          </Switcher>
          <PriceContainer>
            <strong> R$ 430,00 </strong>
            <span>ou 10x de R$43,00</span>
          </PriceContainer>
        </BottomMenu>
      </PokemonBox>
      <PokemonBox>
        <TopInformation>
          <img src={defaultPokemon} alt='Default Pokemon'/>
          <SideInformation>
            <h4>Name: Charmander</h4>
            <h4>Lvl: 93</h4>
            <StarContainer>
              <StarIcon style={{fill: 'var(--black)'}}/>
              <StarIcon style={{fill: 'var(--black)'}}/>
              <StarIcon style={{fill: 'var(--black)'}}/>
              <StarIcon style={{fill: 'var(--black)'}}/>
              <StarIcon style={{fill: 'var(--black)'}}/>
            </StarContainer>
            <span>vendido e entregue por <strong>pokestore.com</strong></span>
          </SideInformation>
        </TopInformation>
        <BottomMenu>
          <Switcher>
            <button>
              <MinusIcon/>
            </button>
            <span>2</span>
            <button>
              <PlusIcon/>
            </button>
          </Switcher>
          <PriceContainer>
            <strong> R$ 430,00 </strong>
            <span>ou 10x de R$43,00</span>
          </PriceContainer>
        </BottomMenu>
      </PokemonBox>
      <PokemonBox>
        <TopInformation>
          <img src={defaultPokemon} alt='Default Pokemon'/>
          <SideInformation>
            <h4>Name: Charmander</h4>
            <h4>Lvl: 93</h4>
            <StarContainer>
              <StarIcon style={{fill: 'var(--black)'}}/>
              <StarIcon style={{fill: 'var(--black)'}}/>
              <StarIcon style={{fill: 'var(--black)'}}/>
              <StarIcon style={{fill: 'var(--black)'}}/>
              <StarIcon style={{fill: 'var(--black)'}}/>
            </StarContainer>
            <span>vendido e entregue por <strong>pokestore.com</strong></span>
          </SideInformation>
        </TopInformation>
        <BottomMenu>
          <Switcher>
            <button>
              <MinusIcon/>
            </button>
            <span>2</span>
            <button>
              <PlusIcon/>
            </button>
          </Switcher>
          <PriceContainer>
            <strong> R$ 430,00 </strong>
            <span>ou 10x de R$43,00</span>
          </PriceContainer>
        </BottomMenu>
      </PokemonBox>
      <ConfirmationArea>
        <ConfirmationContent>
          <h3>Total:</h3>
          <PriceContainer>
            <strong> R$ 430,00 </strong>
            <span>ou 10x de R$43,00</span>
          </PriceContainer>
          <ConfirmButton>
            <BasketIcon />
            <strong>Confirmar Pedido</strong>
          </ConfirmButton>
          <a onClick={() => changeCartHandler()}>Adicionar mais pokemons</a>
        </ConfirmationContent>
      </ConfirmationArea>
    </Container>
  );
}

export default Cart;