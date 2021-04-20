import styled from 'styled-components';
import { StarFill } from '../../../../styles/icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(148deg, rgba(255, 38, 0, 1) 30%, rgba(0, 0, 0, 1) 100%);
  border: 1px solid var(--outline);
  border-radius: 10px;
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  > h2 {
    text-transform: capitalize;
  }
`;
export const Dot = styled.div`
  background: var(--white);
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin: 0 10px;
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > img {
    width: 10rem;
  }
`;

export const StarContainer = styled.div`
  display: flex;
  align-self: flex-start;
`;

export const PriceContainer = styled.div`
  margin-bottom: 0.5rem;
`;

export const StarIcon = styled(StarFill)`
  width: 10px;
`;

export const Footer = styled.div`
  width: 100%;
  > button {
    font-weight: bold;

    padding: 0.75rem 0;
    border-top: 1px solid var(--white);

    outline: 0;
    width: 100%;

    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      filter: brightness(2);
      background: rgba(255, 255, 255, 0.2)
    }
  }
`;
