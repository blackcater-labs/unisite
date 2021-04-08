import React from "react";

import Card from "../Card";

type StatisticCardProps = {};

type StatisticCardFC = React.FC<StatisticCardProps>;

const StatisticCard: StatisticCardFC = () => {
  return <Card>StatisticCard</Card>;
};

export type { StatisticCardProps };
export default StatisticCard;
