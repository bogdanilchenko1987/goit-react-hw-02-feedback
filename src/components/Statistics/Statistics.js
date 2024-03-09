import { StatisticsItem } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <>
      <StatisticsItem> Good : {good ? good : 0}</StatisticsItem>
      <StatisticsItem>Neutral: {neutral ? neutral : 0}</StatisticsItem>
      <StatisticsItem>Bad: {bad ? bad : 0}</StatisticsItem>
      <StatisticsItem>Total: {total}</StatisticsItem>
      <StatisticsItem>
        Positive feedback : {positive ? positive : 0}%
      </StatisticsItem>
    </>
  );
};
