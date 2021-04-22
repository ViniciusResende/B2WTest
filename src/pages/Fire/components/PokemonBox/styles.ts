import styled, { css } from 'styled-components';
import { 
  StarFill, 
  Minus, 
  Plus, 
} from '../../../../styles/icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  margin-top: 0.5rem;

  border: 1px solid var(--ligh-gray);
`;


export const TopInformation = styled.div`
  display: flex;

  > img {
    width: 100px;
    margin-right: 1rem;
  }
`;
export const SideInformation = styled.div`
  display: flex;
  flex-direction: column;
  > h4 {
    color: var(--dark-gray);
  }
  > span {
    color: var(--medium-light-gray);
    font-size: 0.5rem;

    > strong {
      color: var(--outline);
    }
  }
`;
export const BottomMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding-top: 1rem;
`;
export const Switcher = styled.div`
  border: 2px solid var(--ligh-gray);
  display: flex;
  align-items: center;
  justify-content: space-around;

  > button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 50%;
    padding: 0.25rem;
    color: var(--outline);
    outline: 0;

    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: var(--ligh-gray);
    }
  }

  > span {
    padding: 0.25rem;
    font-size: 0.75rem;
    line-height: 0.75rem;
    color: var(--outline); 
  }
`;
export const StarContainer = styled.div``;
export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  > span {
    color: var(--medium-light-gray);
    font-size: 0.5rem;
  }

  > strong {
    color: var(--dark-gray);
  }
`;

export const StarIcon = styled(StarFill)`
  width: 10px;
`;

const IconsCss = css`
  width: 10px;
  fill: var(--outline);
  background: rgba(0, 0, 0, 0);
`

export const MinusIcon = styled(Minus)`${IconsCss}`;
export const PlusIcon = styled(Plus)`${IconsCss}`;