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
        <section className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:hidden mb-4 space-y-4">
            <SearchCard />
          </div>
          <div className="space-y-4 md:space-y-8 md:col-start-1 md:col-span-7 lg:col-start-1 lg:col-span-8">
            <Card>
              <div className="flex flex-row items-center">
                <GatsbyImage
                  className="mr-4 hidden w-10 h-10 rounded-full sm:block"
                  image={getImage(user?.avatar)!}
                  alt="avatar"
                />
                <span className="mr-2 text-lg text-gray-900 font-semibold dark:text-gray-100">
                  {user?.name}
                </span>
              </div>
              {user?.description ? (
                <div className="mt-2 text-gray-700 dark:text-gray-300">
                  {user?.description}
                </div>
              ) : null}
              <div className="mt-4 space-x-2">
                {user?.github_url ? (
                  <SocialBtn key="github" to={user?.github_url} type="github" />
                ) : null}
                {user?.bilibili_url ? (
                  <SocialBtn
                    key="bilibili"
                    to={user?.github_url}
                    type="bilibili"
                  />
                ) : null}
                {user?.leetcode_url ? (
                  <SocialBtn
                    key="leetcode"
                    to={user?.github_url}
                    type="leetcode"
                  />
                ) : null}
                {user?.twitter_url ? (
                  <SocialBtn
                    key="twitter"
                    to={user?.github_url}
                    type="twitter"
                  />
                ) : null}
                {user?.facebook_url ? (
                  <SocialBtn
                    key="facebook"
                    to={user?.github_url}
                    type="facebook"
                  />
                ) : null}
                {user?.youtube_url ? (
                  <SocialBtn
                    key="youtube"
                    to={user?.github_url}
                    type="youtube"
                  />
                ) : null}
                {user?.website_url ? (
                  <SocialBtn
                    key="website"
                    to={user?.website_url}
                    type="website"
                  />
                ) : null}
                {user?.email ? (
                  <SocialBtn
                    key="email"
                    to={`mailto:${user?.email}`}
                    type="email"
                  />
                ) : null}
              </div>
            </Card>
            {posts.map((post) => (
              <PostCard {...post} key={post.id} />
            ))}
          </div>
          <div className="hidden md:block md:col-start-8 md:col-span-5 lg:col-start-9 lg:col-span-4 ml-8">
            <nav className="sticky top-20 space-y-8">
              <SearchCard />
              <StatisticCard />
              <ThemeSwitch />
            </nav>
          </div>
        </section>
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
