import React from "react";
import { graphql } from "gatsby";
import { Post } from "@unisite/core-blog";

import DefaultLayout from "../../../layouts/DefaultLayout";
import PostCard from "../../../components/PostCard";
import { SearchCard, StatisticCard } from "../../../components/Aside";
import ThemeSwitch from "../../../components/ThemeSwitch";
import type { PageProps } from "../../../utils";
import { isDev } from "../../../utils";

type PageData = {
  drafts: {
    nodes: Post[];
  };
  posts: {
    nodes: Post[];
  };
};
type PageContext = {
  posts?: string[];
};
type PostListPageProps = PageProps<PageData, PageContext>;

function PostListPage(props: PostListPageProps): React.ReactElement {
  const drafts = props.data.drafts?.nodes || [];
  const posts = props.data.posts?.nodes || [];

  return (
    <DefaultLayout>
      <div className="max-w-6xl mx-auto p-4 md:px-6 md:py-8">
        <section className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:hidden mb-4 space-y-4">
            <ThemeSwitch />
            <SearchCard />
          </div>
          <div className="space-y-4 md:space-y-8 md:col-start-1 md:col-span-7 lg:col-start-1 lg:col-span-8">
            {isDev
              ? drafts.map((draft) => <PostCard {...draft} key={draft.id} />)
              : null}
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
  query PostListPageQuery($posts: [String!]!) {
    drafts: allPost(filter: { draft: { eq: true } }) {
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
    posts: allPost(
      filter: { id: { in: $posts } }
      sort: { fields: date_at, order: DESC }
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
