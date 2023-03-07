export function Statistics({ statistics: { id, label, percentage } }) {
  return (
    <li class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>
  );
}
