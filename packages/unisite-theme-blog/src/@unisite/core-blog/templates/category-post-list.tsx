import React from "react";
import { graphql } from "gatsby";
import { Category, Post } from "@unisite/core-blog";

import DefaultLayout from "../../../layouts/DefaultLayout";
import PostCard from "../../../components/PostCard";
import { SearchCard, StatisticCard } from "../../../components/Aside";
import ThemeSwitch from "../../../components/ThemeSwitch";
import type { PageProps } from "../../../utils";

interface PageData {
  category: Category;
  posts: {
    nodes: Post[];
  };
}
interface PageContext {
  posts?: string[];
}
type CategoryPostListPageProps = PageProps<PageData, PageContext>;

function CategoryPostListPage(
  props: CategoryPostListPageProps
): React.ReactElement {
  const {category} = props.data;
  const posts = props.data.posts?.nodes || [];

  return (
    <DefaultLayout>
      <div className="max-w-6xl mx-auto p-4 md:px-6 md:py-8">
        <div className="mb-4 md:mb-8 flex flex-row items-center">
          <span className="mr-4 text-lg text-gray-900 font-semibold dark:text-gray-100">
            分类
          </span>
          <span className="px-2 py-0.5 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 hover:shadow rounded dark:text-true-gray-300 dark:hover:text-true-gray-100 dark:bg-true-gray-900 dark:hover:bg-true-gray-800">
            {category.name}
          </span>
          <span className="ml-4 text-sm text-gray-700 dark:text-gray-300">
            共 {category.postCount} 篇文章
          </span>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:hidden mb-4 space-y-4">
            <SearchCard />
          </div>
          <div className="space-y-4 md:space-y-8 md:col-start-1 md:col-span-7 lg:col-start-1 lg:col-span-8">
            {posts.map((post) => (
              <PostCard {...post} key={post.id} />
            ))}
          </div>
          <div className="hidden md:block md:col-start-8 md:col-span-5 lg:col-start-9 lg:col-span-4 ml-8">
            <nav className="sticky top-20 space-y-8">
              <SearchCard />
              <StatisticCard />
              <ThemeSwitch />
            </nav>
          </div>
        </section>
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
