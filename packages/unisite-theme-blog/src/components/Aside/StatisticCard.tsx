import React from "react";
import { get } from "lodash";
import { useStaticQuery, graphql } from "gatsby";

import Card from "../Card";

type StatisticCardProps = {};

type StatisticCardFC = React.FC<StatisticCardProps>;

function useStatisticData() {
  const data = useStaticQuery(graphql`
    query {
      allPost {
        totalCount
      }
      allColumn {
        totalCount
      }
      allTag {
        totalCount
      }
    }
  `);
  const postCount = get(data, "allPost.totalCount") || 0;
  const columnCount = get(data, "allColumn.totalCount") || 0;
  const tagCount = get(data, "allTag.totalCount") || 0;

  return { postCount, columnCount, tagCount };
}

const StatisticCard: StatisticCardFC = () => {
  const { postCount, columnCount, tagCount } = useStatisticData();

  return (
    <Card>
      <div className="-mx-8 flex flex-row justify-evenly">
        <a className="w-14 h-14 flex flex-col items-center rounded-md cursor-pointer hover:bg-gray-100">
          <span className="text-gray-900 text-2xl font-medium">
            {postCount}
          </span>
          <span className="text-gray-700 text-sm">博客</span>
        </a>
        <a className="w-14 h-14 flex flex-col items-center rounded-md cursor-pointer hover:bg-gray-100">
          <span className="text-gray-900 text-2xl font-medium">
            {columnCount}
          </span>
          <span className="text-gray-700 text-sm">专栏</span>
        </a>
        <a className="w-14 h-14 flex flex-col items-center rounded-md cursor-pointer hover:bg-gray-100">
          <span className="text-gray-900 text-2xl font-medium">{tagCount}</span>
          <span className="text-gray-700 text-sm">标签</span>
        </a>
      </div>
    </Card>
  );
};

export type { StatisticCardProps };
export default StatisticCard;
