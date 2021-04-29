import plugin from "windicss/plugin";

import colors from "./colors";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PluginOptions {}

const Plugin = plugin.withOptions(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (_: PluginOptions) => {
    return () => {};
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (_: PluginOptions) => {
    return {
      theme: {
        colors,
      },
      shortcuts: {},
      plugins: [],
    };
  }
);

export default Plugin;
