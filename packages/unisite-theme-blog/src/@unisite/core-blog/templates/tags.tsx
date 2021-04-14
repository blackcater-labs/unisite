import React from "react";
import { graphql, Link } from "gatsby";

import DefaultLayout from "../../../layouts/DefaultLayout";
import { useTagPath } from "../../../utils";
import type { PageProps } from "../../../utils";
import type { Tag } from "../../../types";

type PageData = {
  allTag: {
    nodes: Tag[];
  };
};
type PageContext = {};
type TagsPageProps = PageProps<PageData, PageContext>;

const TagItem = ({ tid, name }: Tag) => {
  const tagPath = useTagPath(tid);

  return (
    <div className="m-2 px-3 py-1 inline-flex flex-row items-center bg-gray-200 rounded-md hover:text-gray-900 hover:bg-gray-300">
      <Link className="text-gray-700 text-xl" to={tagPath}>
        {name}
      </Link>
    </div>
  );
};

function TagsPage(props: TagsPageProps): React.ReactElement {
  const tags = props.data?.allTag?.nodes || [];
  const totalCount = tags.length;

  return (
    <DefaultLayout>
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col items-center">
        <div className="my-24 inline-flex flex-col justify-center items-center">
          <h1 className="text-6xl font-bold">标签</h1>
          <p className="mt-4 text-2xl text-gray-700">共计 {totalCount} 个</p>
        </div>
        <div className="mx-auto mb-24 w-3/4 flex flex-row justify-center">
          {tags.map((tag) => (
            <TagItem key={tag.id} {...tag} />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}

export const query = graphql`
  query TagsPageQuery {
    allTag(
      sort: { fields: postCount, order: DESC }
      filter: { postCount: { gt: 0 } }
    ) {
      nodes {
        id
        tid
        name
        postCount
      }
    }
  }
`;

export default TagsPage;
