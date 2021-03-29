import React from "react";
import cls from "classnames";
import Image from "gatsby-image";
import { ArrowRight } from "@icon-park/react";

type PostCardProps = {
  draft: boolean;
  title: string;
  excerpt: string;
  slug: string;
  published_at?: string;
  updated_at?: string;
  authors?: { id: string; uid: string; name: string; avatar: any }[];
  tags?: { tid: string; name: string }[];
  column?: { cid: string; name: string };
};
type PostCardFC = React.FC<PostCardProps>;

const PostCard: PostCardFC = ({
  draft,
  title,
  excerpt,
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

  return (
    <div className="w-full px-8 py-6 transform duration-300 ease-in-out bg-white rounded-2xl shadow-sm hover:shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <span className={cls(["text-sm", dateColor])}>{dateLabel}</span>
        <span>{dateValue}</span>
      </div>
      <div className="mt-2">
        <a
          href="#"
          className="text-2xl text-gray-900 font-medium hover:underline hover:text-opacity-80 dark:text-white dark:hover:text-gray-200"
        >
          {title}
        </a>
        <p className="mt-2 text-gray-700 dark:text-gray-300">{excerpt}</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <a
          href="#"
          className="flex flex-row items-center px-4 py-2 bg-gray-900 text-gray-50 text-sm rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:ring-opacity-80 transition ease-in duration-300 dark:text-blue-400"
        >
          <span className="mr-1">立即阅读</span>
          <ArrowRight theme="two-tone" />
        </a>
        <div className="flex items-center">
          <Image
            className="hidden w-10 h-10 mr-2 rounded-full sm:block"
            fixed={author?.avatar?.childImageSharp?.fixed}
            alt="avatar"
          />
          <a className="font-medium text-gray-700 cursor-pointer dark:text-gray-200">
            {author?.name}
          </a>
        </div>
      </div>
      {column ? (
        <div className="flex flex-row items-center bg-gray-100 mt-4 p-3 rounded-lg shadow-inner">
          <span className="text-sm text-gray-500">关联专栏：</span>
          <span className="text-gray-900 font-medium cursor-pointer hover:underline hover:text-opacity-80">
            《{column.name}》
          </span>
        </div>
      ) : null}
    </div>
  );
};

export type { PostCardProps };
export default PostCard;
