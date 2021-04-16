import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import type { Category, Tag, Column, ColumnContent } from "@unisite/core-blog";

import DefaultLayout from "../../../layouts/DefaultLayout";
import Card from "../../../components/Card";
import { Tabs, TabItem } from "../../../components/Tabs";
import { MDXCard } from "../../../components/MDXContent";
import type { PageProps } from "../../../utils";
import { useCategoryPath, useTagPath } from "../../../utils";

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
  const chapters = column.chapters;

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
              <Card>
                <section>
                  {(chapters || []).map(({ title, link, sections }, idx) => {
                    if (link || !sections)
                      return (
                        <div
                          key={idx}
                          className="px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-md"
                        >
                          {link ? (
                            <Link className="block" to={link}>
                              {title}
                            </Link>
                          ) : (
                            <div>{title}</div>
                          )}
                        </div>
                      );

                    return (
                      <div key={idx}>
                        <div className="mt-6 mb-3 text-2xl text-gray-900 font-semibold">
                          {title}
                        </div>
                        <ul>
                          {(sections || []).map(({ title, link }, idx) => (
                            <li
                              key={idx}
                              className="px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-md"
                            >
                              {link ? (
                                <Link className="block" to={link}>
                                  {title}
                                </Link>
                              ) : (
                                <div className="flex flex-row justify-between items-center opacity-50">
                                  <span>{title}</span>
                                  <span className="text-xs">待更新</span>
                                </div>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </section>
              </Card>
            </TabItem>
            <TabItem tab="留言" tabKey="comment">
              暂未开放
            </TabItem>
          </Tabs>
        </div>
        <div className="ml-8 col-start-9 col-span-4">
          <div className="sticky top-20 space-y-8">
            <Card>
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
                      <CategoryItem key={category.cid} {...category} />
                    ))}
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <span>标签：</span>
                  <div className="space-x-2">
                    {tags.map((tag) => (
                      <TagItem key={tag.tid} {...tag} />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

function CategoryItem({ cid, name }: Category) {
  const categoryPath = useCategoryPath(cid);

  return (
    <Link
      className="px-2 py-0.5 text-gray-700 text-sm bg-gray-100 hover:bg-gray-200 hover:shadow rounded"
      to={categoryPath}
    >
      {name}
    </Link>
  );
}

function TagItem({ tid, name }: Tag) {
  const tagPath = useTagPath(tid);

  return (
    <Link
      className="px-2 py-0.5 text-gray-700 text-sm bg-gray-100 hover:bg-gray-200 hover:shadow rounded"
      to={tagPath}
    >
      #{name}
    </Link>
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
