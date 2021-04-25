import React from "react";
import { graphql } from "gatsby";
import type { User } from "@unisite/core-blog";

import DefaultLayout from "../../../layouts/DefaultLayout";
import UserCard from "../../../components/UserCard";
import { SearchCard, StatisticCard } from "../../../components/Aside";
import ThemeSwitch from "../../../components/ThemeSwitch";
import type { PageProps } from "../../../utils";

type PageData = {
  users: {
    nodes: User[];
  };
};
type PageContext = {};
type UsersPageProps = PageProps<PageData, PageContext>;

function UsersPage(props: UsersPageProps): React.ReactElement {
  const users = props.data?.users?.nodes || [];

  console.log("users:", users);

  return (
    <DefaultLayout>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8 flex flex-row items-center">
          <span className="mr-4 text-lg text-gray-900 font-semibold dark:text-gray-100">
            用户
          </span>
          <span className="ml-4 text-sm text-gray-700 dark:text-gray-300">
            共 {users.length} 位
          </span>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-start-1 col-span-8 space-y-8">
            <div className="grid grid-cols-3 gap-8">
              {users.map((user) => (
                <UserCard key={user.uid} {...user} />
              ))}
            </div>
          </div>
          <div className="ml-8 col-start-9 col-span-4">
            <nav className="sticky top-20 space-y-8">
              <SearchCard />
              <StatisticCard />
              <ThemeSwitch />
            </nav>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export const query = graphql`
  query UsersPageQuery {
    users: allUser {
      nodes {
        uid
        name
        avatar {
          childImageSharp {
            gatsbyImageData(
              width: 40
              height: 40
              layout: FIXED
              placeholder: TRACED_SVG
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    }
  }
`;

export default UsersPage;
