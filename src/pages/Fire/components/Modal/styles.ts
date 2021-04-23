import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 201;
  top: 0;
  right: 0;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  position: absolute;
  width: 95%;
  height: 20rem;
  background: var(--white);
  z-index: 202;

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }

  @media (min-width: 1366px) {
    width: 40%;
  }
`;

export const Head = styled.div`
  > h2 {
    color: var(--dark-gray);
  }

  @media (min-width: 1024px) {
    > h2 {
      font-size: 2rem;
    }
  }
`;

export const Body = styled.div`
  > strong {
    color: var(--outline);
  }

  @media (min-width: 1024px) {
    > strong {
      font-size: 1.25rem;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  > button {
    padding: 1rem 3rem;
    border-radius: 0.5rem;
    font-weight: bold;

    cursor: pointer;
    transition: all 0.3s ease;
    &:first-child{
      background: var(--fire-hover);
    }
    &:last-child{
      background: #00ba03;
    }

    &:hover {
      filter: brightness(0.8);
    }
    @media (min-width: 1024px) {
      font-size: 1.25rem;
    }
  }
`;