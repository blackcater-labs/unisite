import { useMemo } from "react";
import GithubSlugger from "github-slugger";

import type { Heading, Heading2 } from "./type";

const slugger = new GithubSlugger();

export function useHeading2s(headings: Heading[]): Heading2[] {
  return useMemo(() => {
    slugger.reset();

    return headings.map((heading) => {
      const slug = slugger.slug(heading.value);

      return {
        ...heading,
        anchor: slug,
        hash: `#${encodeURIComponent(slug)}`,
      };
    });
  }, [headings]);
}
