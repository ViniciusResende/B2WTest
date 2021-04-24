import styled from 'styled-components';

export const Container = styled.div`
  &.water{
    --primary: #33A1F2;
  }
  &.fire{
    --primary: #ff2600;
  }

  > div div.cart{
    display: none;
  }

  @media (min-width: 1366px){
    > div div.cart{
      display: block;
    }
  }
`;

export const CenteredContent = styled.div`
  display: block;
  @media (min-width: 1366px){
    flex: 1;
    display: flex;
    width: 100%;
    padding: 0 1rem;
  }
`;
