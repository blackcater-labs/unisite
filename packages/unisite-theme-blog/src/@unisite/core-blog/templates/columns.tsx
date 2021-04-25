import React from "react";
import { graphql } from "gatsby";
import type { Column } from "@unisite/core-blog";

import DefaultLayout from "../../../layouts/DefaultLayout";
import ColumnCard from "../../../components/ColumnCard";
import { SearchCard, StatisticCard } from "../../../components/Aside";
import ThemeSwitch from "../../../components/ThemeSwitch";
import type { PageProps } from "../../../utils";

type PageData = {
  columns: {
    nodes: Column[];
  };
};
type PageContext = {};
type ColumnsPageProps = PageProps<PageData, PageContext>;

function ColumnsPage(props: ColumnsPageProps): React.ReactElement {
  const columns = props.data?.columns?.nodes || [];

  return (
    <DefaultLayout>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8 flex flex-row items-center">
          <span className="mr-4 text-lg text-gray-900 font-semibold dark:text-gray-100">
            专栏
          </span>
          <span className="ml-4 text-sm text-gray-700 dark:text-gray-300">
            共 {columns.length} 册
          </span>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-start-1 col-span-8 space-y-8">
            <div className="grid grid-cols-3 gap-8">
              {columns.map((column) => (
                <ColumnCard key={column.cid} {...column} />
              ))}
            </div>
          </div>
          <div className="ml-8 col-start-9 col-span-4">
            <nav className="sticky top-20 space-y-8">
              <SearchCard />
              <StatisticCard />
              <ThemeSwitch />
            </nav>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export const query = graphql`
  query ColumnsPageQuery {
    columns: allColumn {
      nodes {
        cid
        title
        cover {
          childImageSharp {
            gatsbyImageData(
              width: 300
              aspectRatio: 0.707
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    }
  }
`;

export default ColumnsPage;
