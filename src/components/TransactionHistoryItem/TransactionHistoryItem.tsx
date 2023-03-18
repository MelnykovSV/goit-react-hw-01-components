import { TransactionHistoryItemContainer } from './TransactionHistoryItem.styled';
interface ITransactionHistoryItem {
  transactionData: {
    id: string;
    type: string;
    amount: string;
    currency: string;
  };
}

export function TransactionHistoryItem({
  transactionData: { id, type, amount, currency },
}: ITransactionHistoryItem) {
  return (
    <TransactionHistoryItemContainer>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TransactionHistoryItemContainer>
  );
}
