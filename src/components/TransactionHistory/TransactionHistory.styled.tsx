import styled from '@emotion/styled';

export const TransactionHistoryContainer = styled.table`
  width: 500px;
  text-align: center;
  th,
  td {
    padding: 15px;
  }
  thead {
    background-color: #178abb;
    color: white;
    font-weight: 700;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  tbody {
    tr {
      background-color: white;
      :nth-of-type(2n) {
        background-color: #d7cfcf;
      }
    }
  }
`;
