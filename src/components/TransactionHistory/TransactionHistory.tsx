import { TransactionHistoryContainer } from './TransactionHistory.styled';
import { ITransactionHistory } from '../../interfaces';

export function TransactionHistory({ transactions }: ITransactionHistory) {
  return (
    <TransactionHistoryContainer>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </TransactionHistoryContainer>
  );
}
