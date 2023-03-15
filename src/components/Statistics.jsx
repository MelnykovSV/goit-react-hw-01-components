export function Statistics(props) {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">{props.children}</ul>
    </section>
  );
}
