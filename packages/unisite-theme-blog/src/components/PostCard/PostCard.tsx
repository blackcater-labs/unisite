import React from "react";
import cls from "classnames";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ArrowRight } from "@icon-park/react";

import Card from "../Card";
import Button from "../Button";

import { useColumnPath, usePostPath, useUserPath } from "../../utils";

type PostCardProps = {
  draft: boolean;
  title: string;
  excerpt: string;
  slug: string;
  published_at?: string;
  updated_at?: string;
  authors?: { id: string; uid: string; name: string; avatar: any }[];
  tags?: { tid: string; name: string }[];
  column?: { cid: string; title: string };
};
type PostCardFC = React.FC<PostCardProps>;

const PostCard: PostCardFC = ({
  draft,
  title,
  excerpt,
  slug,
  published_at,
  updated_at,
  authors,
  column,
}) => {
  const dateLabel = draft ? "草稿中" : updated_at ? "更新于" : "发表于";
  const dateColor = draft
    ? "text-gray-500"
    : updated_at
    ? "text-yellow-500"
    : "text-green-500";
  const dateValue = draft ? "" : updated_at || published_at;
  const author = authors?.[0];
  const postPath = usePostPath(slug);
  const userPath = useUserPath(author?.uid || "");
  const columnPath = useColumnPath(column?.cid || "");

  return (
    <Card>
      <div className="flex items-center justify-between">
        <span className={cls(["text-sm", dateColor])}>{dateLabel}</span>
        <span className="text-sm text-gray-700 dark:text-true-gray-500">
          {dateValue}
        </span>
      </div>
      <div className="mt-2">
        <Link
          className="text-2xl text-gray-900 font-medium hover:underline hover:text-opacity-80 dark:text-white dark:hover:text-gray-100"
          to={postPath}
        >
          {title}
        </Link>
        <p className="mt-2 text-gray-700 dark:text-gray-300">{excerpt}</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <Link to={postPath}>
          <Button>
            <span className="mr-1">立即阅读</span>
            <ArrowRight theme="two-tone" />
          </Button>
        </Link>
        <div className="flex items-center">
          <GatsbyImage
            className="hidden w-10 h-10 mr-2 rounded-full sm:block"
            image={getImage(author?.avatar)!}
            alt="avatar"
          />
          <Link
            className="font-medium text-gray-700 cursor-pointer dark:text-gray-200"
            to={userPath}
          >
            {author?.name}
          </Link>
        </div>
      </div>
      {column ? (
        <div className="flex flex-row items-center bg-gray-100 mt-4 p-3 rounded-lg shadow-inner dark:bg-true-gray-800">
          <span className="text-sm text-gray-500">阅读专栏：</span>
          <Link
            className="text-gray-900 font-medium cursor-pointer hover:underline hover:text-opacity-80 dark:text-gray-100"
            to={columnPath}
          >
            《{column.title}》
          </Link>
        </div>
      ) : null}
    </Card>
  );
};

export type { PostCardProps };
export default PostCard;
