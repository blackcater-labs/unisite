import React from "react";
import { graphql, Link } from "gatsby";
import type { Category } from "@unisite/core-blog";

import DefaultLayout from "../../../layouts/DefaultLayout";
import { useCategoryPath } from "../../../utils";
import type { PageProps } from "../../../utils";

type PageData = {
  allCategory: {
    nodes: Category[];
  };
};
type PageContext = {};
type CategoriesPageProps = PageProps<PageData, PageContext>;

const CategoryItem = ({ cid, name }: Category) => {
  const categoryPath = useCategoryPath(cid);

  return (
    <div className="m-2 px-3 py-1 inline-flex flex-row items-center bg-gray-200 rounded-md hover:text-gray-900 hover:bg-gray-300">
      <Link className="text-gray-700 text-xl" to={categoryPath}>
        {name}
      </Link>
    </div>
  );
};

function CategoriesPage(props: CategoriesPageProps): React.ReactElement {
  const categories = props.data?.allCategory?.nodes || [];
  const totalCount = categories.length;

  return (
    <DefaultLayout>
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col items-center">
        <div className="my-24 inline-flex flex-col justify-center items-center">
          <h1 className="text-6xl font-bold">分类</h1>
          <p className="mt-4 text-2xl text-gray-700">共计 {totalCount} 个</p>
        </div>
        <div className="mx-auto mb-24 w-3/4 flex flex-row justify-center">
          {categories.map((category) => (
            <CategoryItem key={category.id} {...category} />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}

export const query = graphql`
  query CategoriesPageQuery {
    allCategory(
      sort: { fields: postCount, order: DESC }
      filter: { postCount: { gt: 0 } }
    ) {
      nodes {
        id
        cid
        name
      }
    }
  }
`;

export default CategoriesPage;
