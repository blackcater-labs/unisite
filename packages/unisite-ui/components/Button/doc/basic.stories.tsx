import React from "react";

import Button from "..";

export const Basic = (args: any) => <Button {...args} />;

Basic.args = { children: "Basic" };

Basic.argTypes = {
  status: {
    name: "Badge Status",
    description: "Available options available to the Badge",
    control: {
      type: "select",
      options: ["positive", "negative", "warning", "error", "error", "neutral"],
    },
    table: {
      defaultValue: {
        summary: "positive",
      },
      type: {
        summary: "Shows options to the Badge",
        detail: "Listing of available options",
      },
    },
  },
  label: {
    name: "Badge Content",
    description: "Text shown by Badge",
    control: {
      type: "text",
    },
    table: {
      type: {
        summary: "The label contents",
        detail: "Text displayed by the Badge",
      },
    },
  },
};
