import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import type { User } from "@unisite/core-blog";

import { useUserPath } from "../../utils";

type UserCardProps = {} & Partial<User>;
type UserCardFC = React.FC<UserCardProps>;

const UserCard: UserCardFC = ({ uid, name, avatar }) => {
  const userPath = useUserPath(uid!);

  return (
    <Link
      className="p-2 bg-white rounded-2xl shadow-sm dark:bg-true-gray-900 hover:shadow-md"
      to={userPath}
    >
      <div className="flex flex-row items-center">
        <GatsbyImage
          className="p-2 hidden w-10 h-10 rounded-full sm:block"
          image={getImage(avatar)!}
          alt="avatar"
        />
        <span className="px-2 text-lg text-gray-900 font-semibold dark:text-gray-100">
          {name}
        </span>
      </div>
    </Link>
  );
};

export type { UserCardProps };
export default UserCard;
