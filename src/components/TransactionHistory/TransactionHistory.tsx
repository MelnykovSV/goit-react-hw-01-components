interface ITransactionHistory {
  children?: React.ReactNode;
}
export function TransactionHistory({ children }: ITransactionHistory) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{children}</tbody>
    </table>
  );
}
