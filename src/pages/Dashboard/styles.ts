import styled from 'styled-components';

export const FoodsContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 40px 0;
  margin-top: -140px;

  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;

  @media (max-width: 1290px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
  }

  @media (max-width: 725px) {
    display: flex;
    flex-direction: column;
    padding: 0 24px;
  }
`;
