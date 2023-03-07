export function Statistics({ statistics: { id, label, percentage } }) {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        <li class="item">
          <span class="label">{label}</span>
          <span class="percentage">{percentage}</span>
        </li>
      </ul>
    </section>
  );
}
