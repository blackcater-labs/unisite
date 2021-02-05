import React from "react";
import { addDecorator } from "@storybook/react";

import Layout from "./components/Layout";

import "@styles/index.less";

addDecorator((storyFn) => <Layout>{storyFn()}</Layout>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: [
        "overview",
        "design-system",
        ["color", "typography"],
        "component",
        ["button"],
      ],
    },
  },
};
