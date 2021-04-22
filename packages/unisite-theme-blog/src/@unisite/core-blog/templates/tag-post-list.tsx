import React from "react";
import { graphql } from "gatsby";
import { Tag, Post } from "@unisite/core-blog";

import DefaultLayout from "../../../layouts/DefaultLayout";
import PostCard from "../../../components/PostCard";
import { SearchCard, StatisticCard } from "../../../components/Aside";
import ThemeSwitch from "../../../components/ThemeSwitch";
import type { PageProps } from "../../../utils";

type PageData = {
  tag: Tag;
  posts: {
    nodes: Post[];
  };
};
type PageContext = {
  tag: string;
  posts: string[];
};
type TagPostListPageProps = PageProps<PageData, PageContext>;

function TagPostListPage(props: TagPostListPageProps): React.ReactElement {
  const tag = props.data.tag;
  const posts = props.data.posts?.nodes || [];

  console.log("props:", props);

  return (
    <DefaultLayout>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8 flex flex-row items-center">
          <span className="mr-4 text-lg text-gray-900 font-semibold dark:text-gray-100">
            标签
          </span>
          <span className="px-2 py-0.5 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 hover:shadow rounded dark:text-true-gray-300 dark:hover:text-true-gray-100 dark:bg-true-gray-900 dark:hover:bg-true-gray-800">
            #{tag.name}
          </span>
          <span className="ml-4 text-sm text-gray-700 dark:text-gray-300">
            共 {tag.postCount} 篇文章
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
              <ThemeSwitch />
            </nav>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export const query = graphql`
  query TagPostListPageQuery($tag: String!, $posts: [String!]!) {
    tag(id: { eq: $tag }) {
      tid
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

export default TagPostListPage;
