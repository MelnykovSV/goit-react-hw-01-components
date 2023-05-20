import { StatisticsContainer } from './Statistics.styled';
import { colorRandomizer } from '../../colorRandomizer';

import { IStatistics } from '../../interfaces';

export function Statistics({ stats }: IStatistics) {
  return (
    <StatisticsContainer className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className="item"
              id={id}
              key={id}
              style={{ backgroundColor: colorRandomizer() }}
            >
              <span className="label">{label}</span>
              <span className="percentage">{percentage}</span>
            </li>
          );
        })}
      </ul>
    </StatisticsContainer>
  );
}
