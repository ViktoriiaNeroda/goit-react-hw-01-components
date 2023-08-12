import { Section, Title, StatList, StatItem, Label } from "./Statistic.styled.js";

export const StatisticsCard = ({ stats, title }) => {
  return (
    <Section className="statistics">
      {title && <Title className="title">{title}</Title>}
      <StatList className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem key={id} className="item">
              <Label className="label">{label}</Label>
              <Label className="percentage">{percentage} %</Label>
            </StatItem>
          );
        })}
      </StatList>
    </Section>
  );
};