import styled from '@emotion/styled';

export const StatisticsContainer = styled.section`
  width: 500px;
  background-color: #b7d6dd;
  text-align: center;
  padding-top: 20px;
  h2 {
    margin: 0;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
  ul {
    list-style: none;
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    padding: 0;
    margin: 0;
    width: 100%;
    background-color: yellow;
    li {
      font-weight: 700;
      color: white;
      padding: 15px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      justify-content: center;
      align-items: center;

      span {
        display: block;
      }
    }
  }
`;
