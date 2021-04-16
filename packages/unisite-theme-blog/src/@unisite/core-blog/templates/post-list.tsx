import React from "react";
import { graphql } from "gatsby";

import DefaultLayout from "../../../layouts/DefaultLayout";
import PostCard from "../../../components/PostCard";
import { SearchCard, StatisticCard, AdCard } from "../../../components/Aside";
import type { PageProps } from "../../../utils";

type PageData = {
  allPost: {
    nodes: any[];
  };
};
type PageContext = {
  posts?: string[];
};
type PostListPageProps = PageProps<PageData, PageContext>;

function PostListPage(props: PostListPageProps): React.ReactElement {
  const posts = props.data.allPost?.nodes || [];

  return (
    <DefaultLayout>
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-12">
        <div className="col-start-1 col-span-8 space-y-8">
          {posts.map((post) => (
            <PostCard {...post} key={post.id} />
          ))}
        </div>
        <div className="ml-8 col-start-9 col-span-4">
          <nav className="space-y-8">
            <SearchCard />
            <StatisticCard />
            <AdCard />
          </nav>
        </div>
      </div>
    </DefaultLayout>
  );
}

export const query = graphql`
  query PostListPageQuery($posts: [String!]!) {
    allPost(
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

export default PostListPage;
