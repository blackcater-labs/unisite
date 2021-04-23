import React, { useEffect, useMemo, useState } from "react";

type TabsProps = {
  defaultActiveKey?: string;
  onChange?: (activeKey: string) => void;
};
type TabsFC = React.FC<TabsProps>;

const Tabs: TabsFC = ({ defaultActiveKey, children }) => {
  const values = useMemo(
    () =>
      (
        React.Children.map(children, (child) =>
          React.isValidElement(child) ? child : null
        ) || []
      )
        .filter((child) => !!child)
        .map((child) => ({
          key: child.props.tabKey,
          children: child.props.children,
        })),
    [children]
  );
  const defaultVal = useMemo(
    () =>
      values.filter((item) => item.key === defaultActiveKey)[0] || values[0],
    [values, defaultActiveKey]
  );
  const [currentKey, setCurrentKey] = useState(defaultVal?.key);
  const [content, setContent] = useState<React.ReactChild>(
    defaultVal?.children
  );

  useEffect(() => {
    if (!defaultVal) return;
    setCurrentKey(defaultVal?.key);
    setContent(defaultVal?.children);
  }, [defaultVal]);

  return (
    <>
      <div className="inline-flex flex-row items-center p-1 space-x-4 bg-gray-200 rounded-full dark:bg-true-gray-900">
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child, {
                key: child.props.tabKey,
                active: currentKey === child.props.tabKey,
                onClick: () => {
                  setCurrentKey(child.props.tabKey);
                  setContent(child.props.children);
                },
              })
            : child
        )}
      </div>
      <div>{content}</div>
    </>
  );
};

export type { TabsProps };
export default Tabs;
