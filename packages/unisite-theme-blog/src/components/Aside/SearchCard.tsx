import React from "react";
import { Search as IconSearch } from "@icon-park/react";

import Card from "../Card";
import Button from "../Button";

type SearchCardProps = {};

type SearchCardFC = React.FC<SearchCardProps>;

const SearchCard: SearchCardFC = () => {
  return (
    <Card>
      <div className="flex flex-row items-center">
        <input
          className="flex-1 px-3 py-1 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 transition ease-in duration-300"
          placeholder="搜索"
        />
        <Button.Icon className="ml-4">
          <IconSearch theme="outline" size="20" />
        </Button.Icon>
      </div>
    </Card>
  );
};

export type { SearchCardProps };
export default SearchCard;
