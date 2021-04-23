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
`;

export const Head = styled.div`
  > h2 {
    color: var(--dark-gray);
  }
`;

export const Body = styled.div`
  > strong {
    color: var(--outline);
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
  }
`;