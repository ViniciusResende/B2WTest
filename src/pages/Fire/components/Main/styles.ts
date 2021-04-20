import styled from 'styled-components';

export const Container = styled.main`
  width: 85%;
  margin: auto;
  padding: 2rem 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr));
  grid-gap: 2.25rem;
`;
