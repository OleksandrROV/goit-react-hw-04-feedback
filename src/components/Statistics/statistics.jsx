import { useMemo } from 'react';

export const Statistic = ({ good, neutral, bad }) => {
  const total = useMemo(() => good + neutral + bad, [good, neutral, bad]);
  const positivePercentage = useMemo(
    () => Math.round((good / total) * 100),
    [good, total]
  );

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
