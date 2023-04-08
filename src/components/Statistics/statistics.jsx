export const Statistic = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const positivePercentage = Math.round((good / total) * 100) || 0;

  return (
    <ul className="stat-list">
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>PositivePercentage: {positivePercentage}%</li>
    </ul>
  );
};
