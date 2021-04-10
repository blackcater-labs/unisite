import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Card from "../../../components/Card";
import DefaultLayout from "../../../layouts/DefaultLayout";
import type { PageProps } from "../../../utils";
import type { BlogPost } from "../../../types";

type PageData = {
  post: Partial<BlogPost>;
  previousPost?: Partial<BlogPost>;
  nextPost?: Partial<BlogPost>;
};
type PageContext = {
  id: string;
  nextId?: string;
  previousId?: string;
};
type PostDetailPageProps = PageProps<PageData, PageContext>;

function PostDetailPage(props: PostDetailPageProps): React.ReactElement {
  const { post } = props.data;

  return (
    <DefaultLayout>
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-12">
        <div className="col-start-1 col-span-8 space-y-8">
          <Card>
            <div className="-mt-8">
              <MDXRenderer>{post.body!}</MDXRenderer>
            </div>
          </Card>
        </div>
        <div className="col-start-10 col-span-3">
          <nav className="space-y-8">
            <p>haha</p>
            <p>haha</p>
            <p>haha</p>
            <p>haha</p>
            <p className="sticky top-12">haha2</p>
            <p>haha</p>
            <p>haha</p>
            <p>haha</p>
            <p>haha</p>
            <p>haha</p>
          </nav>
        </div>
      </div>
    </DefaultLayout>
  );
}

export const query = graphql`
  query PostDetailPageQuery(
    $id: String!
    $previousId: String
    $nextId: String
  ) {
    post: post(id: { eq: $id }) {
      draft
      title
      cover {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      authors {
        __typename
        uid
        name
        avatar {
          childImageSharp {
            fixed(width: 40, height: 40) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
      published_at
      updated_at
      tags {
        tid
        name
      }
      categories {
        cid
        name
      }
      headings {
        value
        depth
      }
      tableOfContents
      timeToRead
      wordCount {
        words
        paragraphs
        sentences
      }
      body
    }
    previousPost: post(id: { eq: $previousId }) {
      title
    }
    nextPost: post(id: { eq: $nextId }) {
      title
    }
  }
`;

export default PostDetailPage;
