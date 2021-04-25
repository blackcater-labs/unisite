import React from "react";
import { get } from "lodash";
import { useStaticQuery, graphql, Link } from "gatsby";

import Card from "../Card";

import {
  useArchivesPath,
  useColumnListPath,
  useTagListPath,
} from "../../utils";

type StatisticCardProps = {};

type StatisticCardFC = React.FC<StatisticCardProps>;

function useStatisticData() {
  const data = useStaticQuery(graphql`
    query useStatisticDataQuery {
      allPost(filter: { draft: { ne: true } }) {
        totalCount
      }
      allColumn {
        totalCount
      }
      allTag(filter: { postCount: { gt: 0 } }) {
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
  const archiveListPath = useArchivesPath();
  const columnListPath = useColumnListPath();
  const tagListPath = useTagListPath();

  return (
    <Card>
      <div className="-mx-8 flex flex-row justify-evenly">
        <Link
          className="w-14 h-14 flex flex-col items-center rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-true-gray-800"
          to={archiveListPath}
        >
          <span className="text-gray-900 text-2xl font-medium dark:text-gray-100">
            {postCount}
          </span>
          <span className="text-gray-700 text-sm dark:text-gray-300">博客</span>
        </Link>
        <Link
          className="w-14 h-14 flex flex-col items-center rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-true-gray-800"
          to={columnListPath}
        >
          <span className="text-gray-900 text-2xl font-medium dark:text-gray-100">
            {columnCount}
          </span>
          <span className="text-gray-700 text-sm dark:text-gray-300">专栏</span>
        </Link>
        <Link
          className="w-14 h-14 flex flex-col items-center rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-true-gray-800"
          to={tagListPath}
        >
          <span className="text-gray-900 text-2xl font-medium dark:text-gray-100">
            {tagCount}
          </span>
          <span className="text-gray-700 text-sm dark:text-gray-300">标签</span>
        </Link>
      </div>
    </Card>
  );
};

export type { StatisticCardProps };
export default StatisticCard;
