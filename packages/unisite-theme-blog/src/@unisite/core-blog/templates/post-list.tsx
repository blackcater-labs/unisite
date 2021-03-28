import React from "react";
import { graphql } from "gatsby";

import DefaultLayout from "../../../layouts/DefaultLayout";
import PostCard from "../../../components/PostCard";

import type { PageProps } from "../../../utils";

type PageData = {};
type PageContext = {};
type PostListPageProps = PageProps<PageData, PageContext>;

function PostListPage(props: PostListPageProps): React.ReactElement {
  console.log("props:", props);

  return (
    <DefaultLayout>
      <div className="max-w-6xl mx-auto grid grid-cols-12">
        <div className="col-start-1 col-span-7 space-y-8">
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
        <div className="col-start-9 col-span-4">
          <nav className="sticky top-0"></nav>
        </div>
      </div>
    </DefaultLayout>
  );
}

export const query = graphql`
  query PostListQuery($posts: [String!]!) {
    allPost(filter: { id: { in: $posts } }) {
      nodes {
        id
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
              fixed(width: 80, height: 80) {
                ...GatsbyImageSharpFixed_withWebp
              }
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
            name
          }
        }
      }
    }
  }
`;

export default PostListPage;
