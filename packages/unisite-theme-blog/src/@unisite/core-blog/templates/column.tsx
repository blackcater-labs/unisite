import React from "react";

import type { PageProps } from "../../../utils";

type PageData = {};
type PageContext = {};
type ColumnDetailPage = PageProps<PageData, PageContext>;

function ColumnDetailPage(props: ColumnDetailPage): React.ReactElement {
  console.log("props:", props);

  return (
    <div className="container mx-auto">
      <h1 className="font-serif font-bold text-2xl mt-4 mb-2 md:text-4xl">
        column detail page2
      </h1>
    </div>
  );
}

export default ColumnDetailPage;
