import styled from '@emotion/styled';

export const UserProfile = styled.div`
  background-color: gray;
  width: 300px;
  font-size: 16px;
  border-radius: 10px;

  overflow: hidden;

  .description {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  img {
    display: block;
    width: 150px;
    margin: 0 auto;
    border-radius: 50%;
    background-color: blue;
    margin-bottom: 30px;
  }
  .name {
    font-size: 20px;
    font-weight: 700;
    margin: 0 auto;
    max-width: 200px;
    text-align: center;
    margin-bottom: 10px;
  }
  .tag {
    text-align: center;
    margin: 0 auto;
    max-width: 200px;
    margin-bottom: 10px;
  }
  .location {
    text-align: center;
    margin: 0 auto;
    max-width: 200px;
  }
  .stats {
    margin: 0;
    list-style: none;
    overflow: hidden;
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    padding: 0;
    border: solid 1px violet;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    grid-gap: 1px;
    background-color: violet;
    li {
      background-color: pink;
      padding: 20px 10px;
      text-align: center;
      .label {
        display: block;
        margin-bottom: 10px;
      }
      .quantity {
        display: block;
        font-size: 20px;
        font-weight: 700;
      }
    }
  }
`;
