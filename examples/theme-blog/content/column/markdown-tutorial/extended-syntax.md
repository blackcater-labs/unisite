---
column: "markdown-tutorial"
title: "扩展语法"
author: "blackcater"
published_at: "2021-04-13"
tags:
  - "markdown"
---

# 扩展语法

我们基于 MDX，向其中注入了一些组件，这些组件可以实现非常丰富的功能。

---

## 链接

```markdown
<Link href="https://www.github.com">Github</Link> <Link href="https://www.github.com" showIcon>Github</Link>
```

<details open>
  <summary>效果预览</summary>

<Example>

<Link href="https://www.github.com">Github</Link> <Link href="https://www.github.com" showIcon>Github</Link>

</Example>

</details>

## 标签

```markdown
<Tag color="gray">标签</Tag>
<Tag color="red">标签</Tag>
<Tag color="pink">标签</Tag>
<Tag color="grape">标签</Tag>
<Tag color="violet">标签</Tag>
<Tag color="indigo">标签</Tag>
<Tag color="blue">标签</Tag>
<Tag color="cyan">标签</Tag>
<Tag color="teal">标签</Tag>
<Tag color="green">标签</Tag>
<Tag color="lime">标签</Tag>
<Tag color="yellow">标签</Tag>
<Tag color="orange">标签</Tag>
```

<details open>
  <summary>效果预览</summary>

<Example>

<Tag color="gray">标签</Tag>
<Tag color="red">标签</Tag>
<Tag color="pink">标签</Tag>
<Tag color="grape">标签</Tag>
<Tag color="violet">标签</Tag>
<Tag color="indigo">标签</Tag>
<Tag color="blue">标签</Tag>
<Tag color="cyan">标签</Tag>
<Tag color="teal">标签</Tag>
<Tag color="green">标签</Tag>
<Tag color="lime">标签</Tag>
<Tag color="yellow">标签</Tag>
<Tag color="orange">标签</Tag>

</Example>

</details>

## 高亮

```markdown
<Highlight color="gray">标签</Highlight>
<Highlight color="red">标签</Highlight>
<Highlight color="pink">标签</Highlight>
<Highlight color="grape">标签</Highlight>
<Highlight color="violet">标签</Highlight>
<Highlight color="indigo">标签</Highlight>
<Highlight color="blue">标签</Highlight>
<Highlight color="cyan">标签</Highlight>
<Highlight color="teal">标签</Highlight>
<Highlight color="green">标签</Highlight>
<Highlight color="lime">标签</Highlight>
<Highlight color="yellow">标签</Highlight>
<Highlight color="orange">标签</Highlight>
```

<details open>
  <summary>效果预览</summary>

<Example>

<Highlight color="gray">标签</Highlight>
<Highlight color="red">标签</Highlight>
<Highlight color="pink">标签</Highlight>
<Highlight color="grape">标签</Highlight>
<Highlight color="violet">标签</Highlight>
<Highlight color="indigo">标签</Highlight>
<Highlight color="blue">标签</Highlight>
<Highlight color="cyan">标签</Highlight>
<Highlight color="teal">标签</Highlight>
<Highlight color="green">标签</Highlight>
<Highlight color="lime">标签</Highlight>
<Highlight color="yellow">标签</Highlight>
<Highlight color="orange">标签</Highlight>

</Example>

</details>

## 示例

```markdown
<Example>

This is content.

</Example>
```

<details open>
  <summary>效果预览</summary>

<Example>

<Example>

This is content.

</Example>

</Example>

</details>

## 提示

```markdown
<Aside header="提示" color="grey">

请勿频繁操作，频繁操作可能会导致系统异常。

</Aside>

<Aside header="提示" color="red">

请勿频繁操作，频繁操作可能会导致系统异常。

</Aside>

<Aside header="提示" color="pinl">

请勿频繁操作，频繁操作可能会导致系统异常。

</Aside>

<Aside header="提示" color="grape">

请勿频繁操作，频繁操作可能会导致系统异常。

</Aside>

<Aside header="提示" color="violet">

请勿频繁操作，频繁操作可能会导致系统异常。

</Aside>

<Aside header="提示" color="indigo">

请勿频繁操作，频繁操作可能会导致系统异常。

</Aside>

<Aside header="提示" color="blue">

请勿频繁操作，频繁操作可能会导致系统异常。

</Aside>

<Aside header="提示" color="cyan">

请勿频繁操作，频繁操作可能会导致系统异常。

</Aside>

<Aside header="提示" color="teal">

请勿频繁操作，频繁操作可能会导致系统异常。

</Aside>

<Aside header="提示" color="green">

请勿频繁操作，频繁操作可能会导致系统异常。

</Aside>

<Aside header="提示" color="lime">

请勿频繁操作，频繁操作可能会导致系统异常。

</Aside>

<Aside header="提示" color="yellow">

请勿频繁操作，频繁操作可能会导致系统异常。

</Aside>

<Aside header="提示" color="orange">

请勿频繁操作，频繁操作可能会导致系统异常。

</Aside>
```

<details open>
  <summary>效果预览</summary>

<Example>

<Aside header="提示" color="grey">

请勿频繁操作，频繁操作可能会导致系统异常。

</Aside>

<Aside header="提示" color="red">

请勿频繁操作，频繁操作可能会导致系统异常。

</Aside>

<Aside header="提示" color="pink">

请勿频繁操作，频繁操作可能会导致系统异常。

</Aside>

<Aside header="提示" color="grape">

请勿频繁操作，频繁操作可能会导致系统异常。

</Aside>

<Aside header="提示" color="violet">

请勿频繁操作，频繁操作可能会导致系统异常。

</Aside>

<Aside header="提示" color="indigo">

请勿频繁操作，频繁操作可能会导致系统异常。

</Aside>

<Aside header="提示" color="blue">

请勿频繁操作，频繁操作可能会导致系统异常。

</Aside>

<Aside header="提示" color="cyan">

请勿频繁操作，频繁操作可能会导致系统异常。

</Aside>

<Aside header="提示" color="teal">

请勿频繁操作，频繁操作可能会导致系统异常。

</Aside>

<Aside header="提示" color="green">

请勿频繁操作，频繁操作可能会导致系统异常。

</Aside>

<Aside header="提示" color="lime">

请勿频繁操作，频繁操作可能会导致系统异常。

</Aside>

<Aside header="提示" color="yellow">

请勿频繁操作，频繁操作可能会导致系统异常。

</Aside>

<Aside header="提示" color="orange">

请勿频繁操作，频繁操作可能会导致系统异常。

</Aside>

</Example>

</details>
