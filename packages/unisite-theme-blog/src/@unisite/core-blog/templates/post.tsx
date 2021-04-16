import React, { useRef } from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import cls from "classnames";
import { Left as IconLeft, Right as IconRight } from "@icon-park/react";
import type { BlogPost, Tag } from "@unisite/core-blog";

import DefaultLayout from "../../../layouts/DefaultLayout";
import Card from "../../../components/Card";
import SideNav from "../../../components/SideNav";
import Progress from "../../../components/Progress";
import BackTop from "../../../components/BackTop";
import { MDXCard } from "../../../components/MDXContent";
import { usePostPath, useTagPath } from "../../../utils";
import type { PageProps } from "../../../utils";

type PageData = {
  post: Partial<BlogPost>;
  previousPost?: Partial<BlogPost>;
  nextPost?: Partial<BlogPost>;
};
type PageContext = {
  id: string;
  nextId?: string;
  previousId?: string;
};
type PostDetailPageProps = PageProps<PageData, PageContext>;

function TagItem({ tid, name }: Tag) {
  const tagPath = useTagPath(tid);

  return (
    <Link
      className="px-2 py-0.5 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer hover:shadow"
      to={tagPath}
    >
      {name}
    </Link>
  );
}

function PostDetailPage(props: PostDetailPageProps): React.ReactElement {
  const { post, previousPost, nextPost } = props.data;
  const dateLabel = post.draft
    ? "草稿中"
    : post.updated_at
    ? "更新于"
    : "发表于";
  const dateColor = post.draft
    ? "text-gray-500"
    : post.updated_at
    ? "text-yellow-500"
    : "text-green-500";
  const dateValue = post.draft ? "" : post.updated_at || post.published_at;
  const tags = post.tags || [];
  const authors = post.authors || [];
  const cover = getImage(post.cover);
  const prevPath = usePostPath(previousPost?.slug || "");
  const nextPath = usePostPath(nextPost?.slug || "");
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <DefaultLayout>
      {cover ? (
        <div className="h-96 overflow-hidden">
          <GatsbyImage
            className="w-full h-full"
            image={cover}
            alt={post.title!}
          />
        </div>
      ) : null}
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-12">
        <div ref={contentRef} className="col-start-1 col-span-9 space-y-8">
          <Card>
            <div className="mb-4 flex items-center justify-between">
              <span className={cls(["text-sm", dateColor])}>{dateLabel}</span>
              <span className="text-sm text-gray-700">{dateValue}</span>
            </div>
            <h1 className="text-gray-900 text-4xl font-medium">{post.title}</h1>
            {tags.length ? (
              <div className="mt-4 flex flex-row items-center">
                {tags.map((tag) => (
                  <TagItem key={tag.tid} {...tag} />
                ))}
              </div>
            ) : null}
          </Card>
          <MDXCard>{post.body!}</MDXCard>
          <Card>
            <div className="mb-4 text-xl text-gray-900 font-medium">作者</div>
            <div className="flex flex-row items-center">
              {authors.map((author) => (
                <div
                  key={author.id}
                  className="inline-flex flex-row items-center"
                >
                  <GatsbyImage
                    className="mr-2 rounded-full cursor-pointer"
                    alt={author.name}
                    image={getImage(author.avatar)!}
                  />
                  <span className="text-lg text-gray-700 font-medium cursor-pointer hover:underline">
                    {author.name}
                  </span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <div className="mb-4 text-xl text-gray-900 font-medium">专栏</div>
          </Card>
          <Card>
            <div className="grid grid-cols-12">
              {previousPost ? (
                <Link
                  className="group pl-2 pr-6 py-1 col-start-1 col-span-6 flex flex-row items-center text-gray-700 cursor-pointer hover:bg-gray-100 rounded-md"
                  to={prevPath}
                >
                  <IconLeft
                    className="group-hover:animate-bounce-l mr-2"
                    theme="outline"
                    size="20"
                  />
                  <div>{previousPost.title}</div>
                </Link>
              ) : null}
              {nextPost ? (
                <Link
                  className="group pl-6 pr-2 py-1 col-start-7 col-span-6 flex flex-row justify-end items-center text-gray-700 cursor-pointer hover:bg-gray-100 rounded-md"
                  to={nextPath}
                >
                  <div>{nextPost.title}</div>
                  <IconRight
                    className="group-hover:animate-bounce-r ml-2"
                    theme="outline"
                    size="20"
                  />
                </Link>
              ) : null}
            </div>
          </Card>
        </div>
        <div className="ml-8 col-start-10 col-span-3">
          <SideNav className="sticky top-12" headings={post.headings || []} />
        </div>
      </div>
      <Progress />
      <BackTop />
    </DefaultLayout>
  );
}

export const query = graphql`
  query PostDetailPageQuery(
    $id: String!
    $previousId: String
    $nextId: String
  ) {
    post(id: { eq: $id }) {
      draft
      title
      cover {
        childImageSharp {
          gatsbyImageData(
            width: 1280
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      authors {
        __typename
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
      published_at
      updated_at
      tags {
        tid
        name
      }
      categories {
        cid
        name
      }
      headings {
        value
        depth
      }
      tableOfContents
      timeToRead
      wordCount {
        words
        paragraphs
        sentences
      }
      body
    }
    previousPost: post(id: { eq: $previousId }) {
      title
      slug
    }
    nextPost: post(id: { eq: $nextId }) {
      title
      slug
    }
  }
`;

export default PostDetailPage;
