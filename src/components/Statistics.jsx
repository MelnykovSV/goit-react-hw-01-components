export function Statistics(props) {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">{props.children}</ul>
    </section>
  );
}
