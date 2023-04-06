import { StatListItemContainer } from './StatListItem.styled';

interface IStatListItem {
  id: string;
  label: string;
  percentage: number;
  key: string;
}

export function StatListItem({ id, label, percentage }: IStatListItem) {
  return (
    <StatListItemContainer id={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </StatListItemContainer>
  );
}
