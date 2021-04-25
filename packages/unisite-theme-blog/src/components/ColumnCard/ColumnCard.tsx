import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import type { Column } from "@unisite/core-blog";

import AspectRatio from "../AspectRatio";
import { useColumnPath } from "../../utils";

type ColumnCardProps = {} & Partial<Column>;
type ColumnCardFC = React.FC<ColumnCardProps>;

const ColumnCard: ColumnCardFC = ({ cid, title, cover }) => {
  const columnPath = useColumnPath(cid!);

  return (
    <Link
      className="p-2 bg-white rounded-2xl shadow-sm dark:bg-true-gray-900 hover:shadow-md"
      to={columnPath}
    >
      <AspectRatio
        className="rounded-xl overflow-hidden shadow-xs"
        ratio={300 / 424}
      >
        <GatsbyImage className="" image={getImage(cover)!} alt="cover" />
      </AspectRatio>
      <div className="px-2 mt-2 text-gray-900 text-lg font-semibold dark:text-gray-100">
        {title}
      </div>
    </Link>
  );
};

export type { ColumnCardProps };
export default ColumnCard;
