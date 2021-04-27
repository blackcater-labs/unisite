import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Post, User } from "@unisite/core-blog";

import DefaultLayout from "../../../layouts/DefaultLayout";
import PostCard from "../../../components/PostCard";
import Card from "../../../components/Card";
import { SearchCard, StatisticCard } from "../../../components/Aside";
import ThemeSwitch from "../../../components/ThemeSwitch";
import SocialBtn from "../../../components/SocialBtn";
import type { PageProps } from "../../../utils";

type PageData = {
  user: User;
  posts: {
    nodes: Post[];
  };
};
type PageContext = {
  user: string;
  posts: string[];
};
type UserPostListPageProps = PageProps<PageData, PageContext>;

function UserPostListPage(props: UserPostListPageProps): React.ReactElement {
  const user = props.data.user;
  const posts = props.data.posts?.nodes || [];

  return (
    <DefaultLayout>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-12">
          <div className="col-start-1 col-span-8 space-y-8">
            <Card>
              <div className="flex flex-row items-center">
                <GatsbyImage
                  className="mr-2 hidden w-10 h-10 rounded-full sm:block"
                  image={getImage(user?.avatar)!}
                  alt="avatar"
                />
                <span className="px-2 text-lg text-gray-900 font-semibold dark:text-gray-100">
                  {user?.name}
                </span>
              </div>
              {user?.description ? (
                <div className="mt-2 text-gray-700 dark:text-gray-300">
                  {user.description}
                </div>
              ) : null}
              <div className="mt-4 space-x-2">
                {user?.github_url ? (
                  <SocialBtn to={user?.github_url} type="github" />
                ) : null}
                {user?.bilibili_url ? (
                  <SocialBtn to={user?.github_url} type="bilibili" />
                ) : null}
                {user?.leetcode_url ? (
                  <SocialBtn to={user?.github_url} type="leetcode" />
                ) : null}
                {user?.twitter_url ? (
                  <SocialBtn to={user?.github_url} type="twitter" />
                ) : null}
                {user?.facebook_url ? (
                  <SocialBtn to={user?.github_url} type="facebook" />
                ) : null}
                {user?.youtube_url ? (
                  <SocialBtn to={user?.github_url} type="youtube" />
                ) : null}
                {user?.website_url ? (
                  <SocialBtn to={user?.website_url} type="website" />
                ) : null}
                {user?.email ? (
                  <SocialBtn to={`mailto:${user?.email}`} type="email" />
                ) : null}
              </div>
            </Card>
            {posts.map((post) => (
              <PostCard {...post} key={post.id} />
            ))}
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
  query UserPostListPageQuery($user: String!, $posts: [String!]!) {
    user(id: { eq: $user }) {
      uid
      name
      description
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
      email
      website_url
      github_url
      leetcode_url
      bilibili_url
    }
    posts: allPost(
      filter: { id: { in: $posts } }
      sort: { fields: published_at, order: DESC }
    ) {
      nodes {
        id
        draft
        title
        excerpt
        slug
        published_at(formatString: "yyyy年MM月DD日")
        updated_at(formatString: "yyyy年MM月DD日")
        authors {
          id
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
        tags {
          tid
          name
        }
        ... on MdxColumnPost {
          column {
            cid
            title
          }
        }
      }
    }
  }
`;

export default UserPostListPage;
