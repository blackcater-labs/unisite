import { graphql, useStaticQuery } from "gatsby";
import { get } from "lodash";

import type { UnisiteCoreBlogConfig } from "../../types";

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
        archiveListPrefix
      }
    }
  `);

  return get(data, "unisiteCoreBlogConfig");
}
