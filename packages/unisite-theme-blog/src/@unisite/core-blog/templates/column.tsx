import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import type { Column, ColumnContent } from "@unisite/core-blog";

import DefaultLayout from "../../../layouts/DefaultLayout";
import Card from "../../../components/Card";
import { Tabs, TabItem } from "../../../components/Tabs";
import { MDXCard } from "../../../components/MDXContent";
import type { PageProps } from "../../../utils";

type PageData = {
  column: Column;
  contents: {
    nodes: ColumnContent[];
  };
};
type PageContext = {
  id: string;
  contents: string[];
};
type ColumnDetailPage = PageProps<PageData, PageContext>;

function ColumnDetailPage(props: ColumnDetailPage): React.ReactElement {
  console.log("props:", props);

  const { column, contents } = props.data;
  const cover = getImage(column.cover);
  const authors = column.authors || [];
  const categories = column.categories || [];
  const tags = column.tags || [];
  const intro = contents.nodes.filter((node) => node.type === "intro")[0]?.body;

  return (
    <DefaultLayout>
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-12">
        <div className="col-start-1 col-span-8 space-y-8">
          <Card>
            <div className="flex flex-row items-center">
              {cover ? (
                <div className="mr-8 w-32 bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg">
                  <div className="aspect-w-3 aspect-h-4">
                    <GatsbyImage image={cover} alt={column.title} />
                  </div>
                </div>
              ) : null}
              <div className="flex flex-1 flex-col">
                <h1 className="text-4xl text-gray-900 font-semibold">
                  {column.title}
                </h1>
                {column.subTitle ? (
                  <div className="text-gray-700 mt-2">{column.subTitle}</div>
                ) : null}
                <div className="mt-4 flex flex-row items-center">
                  {authors.map((author) => (
                    <div
                      key={author.uid}
                      className="inline-flex flex-row items-center"
                    >
                      <GatsbyImage
                        className="mr-2 rounded-full cursor-pointer"
                        alt={author.name}
                        image={getImage(author.avatar)!}
                      />
                      <span className="text-lg text-gray-900 cursor-pointer hover:underline">
                        {author.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
          <Tabs>
            <TabItem tab="简介" tabKey="intro">
              <MDXCard>{intro}</MDXCard>
            </TabItem>
            <TabItem tab="目录" tabKey="category">
              <Card>目录信息</Card>
            </TabItem>
            <TabItem tab="留言" tabKey="comment">
              tab3
            </TabItem>
          </Tabs>
        </div>
        <div className="ml-8 col-start-9 col-span-4">
          <Card className="sticky top-12">
            <div className="space-y-2">
              <div className="flex flex-row items-center">
                <span>发布时间：</span>
                <div>2019-01-01</div>
              </div>
              <div className="flex flex-row items-center">
                <span>最近更新：</span>
                <div>2019-01-01</div>
              </div>
              <div className="flex flex-row items-center">
                <span>分类：</span>
                <div className="space-x-2">
                  {categories.map((category) => (
                    <Link
                      key={category.cid}
                      className="px-2 py-0.5 text-gray-700 text-sm bg-gray-100 rounded"
                      to="/"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-row items-center">
                <span>标签：</span>
                <div className="space-x-2">
                  {tags.map((tag) => (
                    <Link
                      key={tag.tid}
                      className="px-2 py-0.5 text-gray-700 text-sm bg-gray-100 rounded"
                      to="/"
                    >
                      #{tag.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DefaultLayout>
  );
}

export const query = graphql`
  query ColumnDetailPageQuery($id: String!, $contents: [String!]!) {
    column(id: { eq: $id }) {
      title
      subTitle
      cover {
        childImageSharp {
          gatsbyImageData(
            width: 300
            height: 400
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      authors {
        __typename
        uid
        name
        avatar {
          childImageSharp {
            gatsbyImageData(
              width: 40
              height: 40
              layout: FIXED
              placeholder: TRACED_SVG
              formats: [AUTO, WEBP]
            )
          }
        }
      }
      categories {
        cid
        name
      }
      tags {
        tid
        name
      }
      chapters
    }
    contents: allMdxColumnContent(filter: { id: { in: $contents } }) {
      nodes {
        type
        body
      }
    }
  }
`;

export default ColumnDetailPage;
