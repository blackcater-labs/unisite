import React from "react";
import { graphql } from "gatsby";
import { Category, Post } from "@unisite/core-blog";

import DefaultLayout from "../../../layouts/DefaultLayout";
import PostCard from "../../../components/PostCard";
import { SearchCard, StatisticCard } from "../../../components/Aside";
import type { PageProps } from "../../../utils";

type PageData = {
  category: Category;
  posts: {
    nodes: Post[];
  };
};
type PageContext = {
  posts?: string[];
};
type CategoryPostListPageProps = PageProps<PageData, PageContext>;

function CategoryPostListPage(
  props: CategoryPostListPageProps
): React.ReactElement {
  const category = props.data.category;
  const posts = props.data.posts?.nodes || [];

  return (
    <DefaultLayout>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8 flex flex-row items-center">
          <span className="mr-4 text-lg text-gray-900 font-semibold">分类</span>
          <span className="px-2 py-0.5 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 hover:shadow rounded">
            {category.name}
          </span>
          <span className="ml-4 text-sm text-gray-700">
            共 {category.postCount} 篇文章
          </span>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-start-1 col-span-8 space-y-8">
            {posts.map((post) => (
              <PostCard {...post} key={post.id} />
            ))}
          </div>
          <div className="ml-8 col-start-9 col-span-4">
            <nav className="sticky top-20 space-y-8">
              <SearchCard />
              <StatisticCard />
            </nav>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export const query = graphql`
  query CategoryPostListPageQuery($category: String!, $posts: [String!]!) {
    category(id: { eq: $category }) {
      cid
      name
      postCount
    }
    posts: allPost(
      filter: { id: { in: $posts } }
      sort: { fields: published_at, order: DESC }
    ) {
      nodes {
        id
        draft
        title
        excerpt
        slug
        published_at(formatString: "yyyy年MM月DD日")
        updated_at(formatString: "yyyy年MM月DD日")
        authors {
          id
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
        tags {
          tid
          name
        }
        ... on MdxColumnPost {
          column {
            cid
            title
          }
        }
      }
    }
  }
`;

export default CategoryPostListPage;
