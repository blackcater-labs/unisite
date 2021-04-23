import { graphql, useStaticQuery } from "gatsby";
import { get } from "lodash";
import type { UnisiteCoreBlogConfig } from "@unisite/core-blog";

export function useCoreConfig(): UnisiteCoreBlogConfig {
  const data = useStaticQuery(graphql`
    query useCoreConfigQuery {
      unisiteCoreBlogConfig {
        tagPrefix
        tagListPrefix
        userPrefix
        userListPrefix
        columnPrefix
        columnListPrefix
        categoryPrefix
        categoryListPrefix
        postPrefix
        postListPrefix
        archivesPrefix
      }
    }
  `);

  return get(data, "unisiteCoreBlogConfig");
}
