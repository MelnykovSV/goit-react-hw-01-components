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
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}
