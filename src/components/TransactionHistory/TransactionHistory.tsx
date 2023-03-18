import { TransactionHistoryContainer } from './TransactionHistory.styled';
interface ITransactionHistory {
  children?: React.ReactNode;
}
export function TransactionHistory({ children }: ITransactionHistory) {
  return (
    <TransactionHistoryContainer>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{children}</tbody>
    </TransactionHistoryContainer>
  );
}
