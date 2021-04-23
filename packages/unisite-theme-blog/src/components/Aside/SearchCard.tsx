import React from "react";
import { Search as IconSearch } from "@icon-park/react";

import Card from "../Card";
import Button from "../Button";
import Key from "../Key";

type SearchCardProps = {};

type SearchCardFC = React.FC<SearchCardProps>;

const SearchCard: SearchCardFC = () => {
  return (
    <Card>
      <div className="flex flex-row items-center">
        <div className="relative flex-1">
          <input
            className="px-3 py-1 w-full bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 transition ease-in duration-300 dark:text-gray-100 dark:bg-true-gray-800 dark:focus:ring-gray-100"
            placeholder="搜索"
          />
          <Key className="absolute top-1 right-1.5">Cmd+K</Key>
        </div>
        <Button.Icon className="ml-4">
          <IconSearch
            className="dark:text-gray-900"
            theme="outline"
            size="20"
          />
        </Button.Icon>
      </div>
    </Card>
  );
};

export type { SearchCardProps };
export default SearchCard;
