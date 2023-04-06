import { TransactionHistoryItemContainer } from './TransactionHistoryItem.styled';
interface ITransactionHistoryItem {
  key: string;
  type: string;
  amount: string;
  currency: string;
}

export function TransactionHistoryItem({
  type,
  amount,
  currency,
}: ITransactionHistoryItem) {
  return (
    <TransactionHistoryItemContainer>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TransactionHistoryItemContainer>
  );
}
