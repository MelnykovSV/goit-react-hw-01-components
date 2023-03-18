import { StatisticsContainer } from './Statistics.styled';

interface IStatistics {
  children?: React.ReactNode;
}

export function Statistics({ children }: IStatistics) {
  return (
    <StatisticsContainer>
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">{children}</ul>
    </StatisticsContainer>
  );
}
