# @unisite/core-blog

> The core library for `@unisite/theme-blog`.

## How to use

```shell
# terminal
> npm install @unisite/core-blog
```

```js
// gatsby-config.js
module.exports = () => {
  return {
    // ...
    plugins: [
      // ...
      "@unisite/core-blog",
      // ...
    ],
    // ...
  };
};
```

## Introduction

We introduce `User`, `Tag`, `Category`, `Column` and `Post` in this plugin.

### `User`

The `User` is the owner or participator of a `Post`. So the `Post` can have more than one `User`.

In default, the information of `User` can be configured in `user.yaml` file. For example:

```yaml
- id: "blackcater"
  name: "Elon Tang"
  avatar: "user/blackcater.png" # relative path
  description: "Completion is more important than perfection!"
  email: "blackcater2015@gmail.com"
  website_url: "https://www.blackcater.com"
  github_url: "https://www.github.com/blackcater"
  # You also can set other social links.
```

> You can change the name of `user.yaml` by setting `Option.userConfigFileName`.

### `Category`

The blog can have more than one `Category`. The `Category` can have more than one `Post`.

In default, the information of `Category` can be configured in `category.yaml` file. For example:

```yaml
- id: "frontend"
  name: "前端"
```

> You can change the name of `category.yaml` by setting `Option.categoryConfigFileName`.

### `Tag`

The `Post` and `Column` can have more than one `Tag`.

In default, the information of `Tag` can be configured in `tag.yaml` file. For example:

```yaml
- id: "vue"
  name: "Vue"
```

> You can change the name of `tag.yaml` by setting `Option.tagConfigFileName`.

### `Column`

The `Column` can have more than one `Tag`, `User` and `Post`.

In default, the information of `Column` can be configured in `column.yaml` file. For example:

```yaml
- id: "markdown-tutorial"
  name: "Markdown Tutorial"
  cover: "column/markdown-tutorial/cover.png"
  # Collection of tag's id
  tags:
    - "markdown"
    - "tutorial"
  # Collection of user's id
  authors:
    - "blackcater"
```

> You can change the name of `column.yaml` by setting `Option.columnConfigFileName`.

### `Post`

The `Post` can have more than one `Tag`, `User` and `Categories`. But it can't have more than one `Column`.

In default, the information of `Post` can be configured in `.md` or `.mdx` files' front-matter. For example:

```md
---
categories:
  - "frontend"
tags:
  - "markdown"
authors:
  - "blackcater"
column: "markdown-tutorial"
---

# Post Title
```

## Configuration
