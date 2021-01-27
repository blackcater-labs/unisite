import React from "react";
import { addDecorator } from "@storybook/react";

import Layout from "./components/Layout";

import "../src/styles/index.less";

addDecorator((storyFn) => <Layout>{storyFn()}</Layout>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
