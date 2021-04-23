import React from "react";
import { useWindowScroll, useWindowSize } from "react-use";

type ProgressProps = {};

type ProgressFC = React.FC<ProgressProps>;

const Progress: ProgressFC = () => {
  const { y } = useWindowScroll();
  const { height } = useWindowSize();
  const ratio =
    typeof window !== "undefined"
      ? Math.min(100, (y / (window.document.body.scrollHeight - height)) * 100)
      : 0;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1">
      <div
        className="absolute top-0 left-0 bottom-0 bg-gray-700 rounded-r transition ease-linear duration-200 dark:bg-gray-300"
        style={{ width: `${ratio}%` }}
      />
    </div>
  );
};

export type { ProgressProps };
export default Progress;
