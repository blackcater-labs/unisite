import React from "react";
import { ArrowRight } from "@icon-park/react";

type PostCardProps = {};
type PostCardFC = React.FC<PostCardProps>;

const PostCard: PostCardFC = () => {
  return (
    <div className="max-w-2xl px-8 py-6 mx-auto transform duration-300 ease-in-out bg-white rounded-2xl shadow-sm hover:shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <span className="text-sm text-green-500 dark:text-gray-400">
          更新于
        </span>
        <span>3月29日</span>
      </div>
      <div className="mt-2">
        <a
          href="#"
          className="text-2xl text-gray-900 font-medium hover:underline hover:text-opacity-80 dark:text-white dark:hover:text-gray-200"
        >
          落霞与孤雁齐飞，秋水共长天一色
        </a>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          大江东去，浪淘尽，千古风流人物。 故垒西边，人道是，三国周郎赤壁。
          乱石穿空，惊涛拍岸，卷起千堆雪。 江山如画，一时多少豪杰。
          遥想公瑾当年，小乔初嫁了，雄姿英发。 羽扇纶巾，谈笑间，樯橹灰飞烟灭。
          故国神游，多情应笑我，早生华发。 人生如梦，一尊还酹江月。
        </p>
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
          <img
            className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
            src="https://cdn.dribbble.com/users/1787150/avatars/normal/0e0a38312a4e1d094d0c69af4317db44.png"
            alt="avatar"
          />
          <a className="font-medium text-gray-700 cursor-pointer dark:text-gray-200">
            苏轼
          </a>
        </div>
      </div>
      <div className="flex flex-row items-center bg-gray-100 mt-4 p-3 rounded-lg shadow-inner">
        <span className="text-sm text-gray-500">关联专栏：</span>
        <span className="text-gray-900 font-medium cursor-pointer hover:underline hover:text-opacity-80">
          《Markdown Tutorial》
        </span>
      </div>
    </div>
  );
};

export type { PostCardProps };
export default PostCard;
