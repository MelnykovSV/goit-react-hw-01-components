import css from './Statistics.module.css';

interface IStatistics {
  children?: React.ReactNode;
}

export function Statistics({ children }: IStatistics) {
  return (
    <section className={css.statistics}>
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">{children}</ul>
    </section>
  );
}
