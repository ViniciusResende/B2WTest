import styled, {css} from 'styled-components';
import { Water, Fire } from '../../styles/icons';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  background: rgb(51,161,242);
  background: linear-gradient(45deg, rgba(51,161,242,1) 15%, rgba(255,38,0,1) 50%, rgba(51,161,242,1) 85%);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  background: var(--white);
  padding: 2rem 0.5rem;

  height: 20rem;
  width: 20rem;

  > h2 {
    color: var(--dark-gray);
    text-align: center;
  }
`;

export const PokeManiaButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid var(--black);
  border-radius: 1rem;
  font-weight: bolder;
  text-decoration: none;
  
  height: 3rem;
  width: 15rem;

  cursor: pointer;
  transition: all 0.3s ease;
  
  &.fire{
    background: var(--fire-hover);
  }
  &.water {
    background: var(--water-hover);
  }

  &:hover{
    filter: brightness(0.8);
  }
`;

const IconsCss = css`
  width: 20px;
  height: 20px;

  margin-right: 1rem;
  fill: var(--white);
`

export const WaterIcon = styled(Water)`${IconsCss}`;
export const FireIcon = styled(Fire)`${IconsCss}`;
