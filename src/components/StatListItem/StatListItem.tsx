interface IStatListItem {
  statistics: { id: string; label: string; percentage: number };
}

export function StatListItem({
  statistics: { id, label, percentage },
}: IStatListItem) {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
}
