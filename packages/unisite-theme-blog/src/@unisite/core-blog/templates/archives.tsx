import React, { useMemo } from "react";
import { graphql, Link } from "gatsby";
import { groupBy } from "lodash";
import type { Post } from "@unisite/core-blog";

import DefaultLayout from "../../../layouts/DefaultLayout";
import type { PageProps } from "../../../utils";
import { usePostPath } from "../../../utils";

type PostData = Post & {
  date_str: string;
};
interface PageData {
  posts: {
    nodes: PostData[];
  };
}
interface PageContext {
  posts?: string[];
}
type ArchivesPageProps = PageProps<PageData, PageContext>;

function PostItem({ title, slug, date_str }: PostData) {
  const postPath = usePostPath(slug);

  return (
    <div className="flex flex-row">
      <span className="w-14 text-sm text-gray-400">{date_str}</span>
      <Link to={postPath}>
        <div className="text-gray-700 hover:underline hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
          「{title}」
        </div>
      </Link>
    </div>
  );
}

function ArchivesPage(props: ArchivesPageProps): React.ReactElement {
  const posts = props.data.posts?.nodes || [];
  const groups = useMemo(
    () =>
      groupBy(posts, (post) => {
        const date = new Date(post.date_at);
        return date.getFullYear();
      }),
    [posts]
  );

  return (
    <DefaultLayout>
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="space-y-8">
          {Object.keys(groups).map((title) => {
            const posts = groups[title];

            return (
              <div>
                <div className="text-4xl font-semibold text-gray-900 border-b-2 border-gray-100 dark:text-gray-100">
                  {title}
                </div>
                <div className="mt-4 space-y-2">
                  {(posts || []).map((post) => (
                    <PostItem key={post.slug} {...post} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DefaultLayout>
  );
}

export const query = graphql`
  query ArchivesPageQuery {
    posts: allPost(
      sort: { fields: date_at, order: DESC }
      filter: { draft: { ne: true } }
    ) {
      nodes {
        id
        draft
        title
        slug
        date_at
        date_str: date_at(formatString: "MMM DD", locale: "en-US")
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

export default ArchivesPage;
