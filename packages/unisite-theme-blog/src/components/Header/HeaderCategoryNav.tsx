import React, { useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { get } from "lodash";
import { Right as IconRight } from "@icon-park/react";
import { useHoverDirty } from "react-use";

type HeaderCategoryNavProps = {};

type HeaderCategoryNavFC = React.FC<HeaderCategoryNavProps>;

function useStaticData() {
  const data = useStaticQuery(
    graphql`
      query useHeaderCategoryNavDataQuery {
        allCategory(
          limit: 8
          filter: { postCount: { gt: 0 } }
          sort: { fields: postCount, order: DESC }
        ) {
          nodes {
            cid
            name
            postCount
          }
        }
        allNotEmptyCategory: allCategory(filter: { postCount: { gt: 0 } }) {
          totalCount
        }
        allPost {
          totalCount
        }
      }
    `
  );
  const categories = get(data, "allCategory.nodes") || [];
  const totalPostCount = get(data, "allPost.totalCount") || 0;
  const totalCategoryCount = get(data, "allNotEmptyCategory.totalCount") || 0;

  return {
    categories,
    totalPostCount,
    totalCategoryCount,
  };
}

const HeaderCategoryNav: HeaderCategoryNavFC = () => {
  const { categories, totalPostCount, totalCategoryCount } = useStaticData();
  const moreRef = useRef(null);
  const isHover = useHoverDirty(moreRef);

  if (!totalCategoryCount) return null;

  return (
    <div className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="py-2 flex flex-row items-center border-t overflow-x-auto">
          <div className="flex-shrink-0 mr-1 px-3 py-1 flex flex-row items-center rounded-md cursor-pointer hover:bg-gray-100">
            <span className="text-sm text-gray-700">全部</span>
            <span className="flex flex-row justify-center items-center py-0.5 px-1 h-4 text-xs text-white rounded-full bg-gray-700 transform scale-75">
              {totalPostCount}
            </span>
          </div>
          {categories.map((category: any) => (
            <div
              key={category.cid}
              className="flex-shrink-0 mr-1 px-3 py-1 flex flex-row items-center rounded-md cursor-pointer hover:bg-gray-100"
            >
              <span className="text-sm text-gray-700">{category.name}</span>
              <span className="flex flex-row justify-center items-center py-0.5 px-1 h-4 text-xs text-white rounded-full bg-gray-700 transform scale-75">
                {category.postCount}
              </span>
            </div>
          ))}
          {totalCategoryCount > 8 ? (
            <div
              ref={moreRef}
              className="flex-shrink-0 mr-1 px-3 py-1 flex flex-row items-center rounded-md cursor-pointer hover:bg-gray-100"
            >
              <span className="text-sm text-gray-700">更多</span>
              <IconRight
                className={isHover ? "animate-bounce-r" : ""}
                size="16"
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export type { HeaderCategoryNavProps };
export default HeaderCategoryNav;
