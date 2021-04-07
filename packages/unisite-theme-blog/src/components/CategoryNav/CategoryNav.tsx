import React, { useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { get } from "lodash";
import { Right as IconRight } from "@icon-park/react";
import { useHoverDirty } from "react-use";

type CategoryNavProps = {};

type CategoryNavFC = React.FC<CategoryNavProps>;

const CategoryNav: CategoryNavFC = () => {
  const cates = get(
    useStaticQuery(
      graphql`
        query {
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
        }
      `
    ),
    "allCategory.nodes"
  );
  const moreRef = useRef(null);
  const isHover = useHoverDirty(moreRef);

  console.log("cates:", cates);

  return (
    <div className="sticky top-0 z-30 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="py-2 flex flex-row items-center border-t overflow-x-auto">
          <div className="flex-shrink-0 mr-1 px-3 py-1 flex flex-row items-center rounded-md cursor-pointer hover:bg-gray-100">
            <span className="text-sm text-lime-700">全部</span>
            <span className="flex flex-row justify-center items-center py-0.5 px-1 h-4 text-xs text-white rounded-full bg-gray-700 transform scale-75">
              99+
            </span>
          </div>
          {cates.map((cate: any) => (
            <div
              key={cate.cid}
              className="flex-shrink-0 mr-1 px-3 py-1 flex flex-row items-center rounded-md cursor-pointer hover:bg-gray-100"
            >
              <span className="text-sm text-gray-700">{cate.name}</span>
              <span className="flex flex-row justify-center items-center py-0.5 px-1 h-4 text-xs text-white rounded-full bg-gray-700 transform scale-75">
                9
              </span>
            </div>
          ))}
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
        </div>
      </div>
    </div>
  );
};

export type { CategoryNavProps };
export default CategoryNav;
