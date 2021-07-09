import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import cls from "classnames";
import { useCopyToClipboard } from "react-use";
import {
  Copy as IconCopy,
  CheckSmall as IconCheckSmall,
} from "@icon-park/react";

import { prefix } from "./_utils";

interface CodeBlockProps {
  className?: string;
  "data-options"?: string;
}

type CodeBlockFC = React.FC<CodeBlockProps>;

interface CodeBlockOptions {
  header?: string;
  filename?: string;
  collapsed?: string;
}

function useOptions(str?: string): CodeBlockOptions {
  return useMemo(() => JSON.parse(str || "{}"), [str]);
}

function useClipboard() {
  const [state, copyToClipboard] = useCopyToClipboard();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (state.value) {
      setOk(true);
      setTimeout(() => {
        setOk(false);
      }, 3000);
    } else {
      setOk(false);
    }
  }, [state]);

  return { ok, copy: copyToClipboard };
}

const CodeBlock: CodeBlockFC = ({ className, children, ...props }) => {
  const options = useOptions(props["data-options"]);
  const header = options.header || options.filename;
  const contentRef = useRef<HTMLPreElement>(null);
  const { ok, copy } = useClipboard();
  const [collapsed, setCollapsed] = useState(options.collapsed === "true");
  const handleCollapse = useCallback(() => setCollapsed((state) => !state), []);

  return (
    <div className={prefix("code-block")}>
      {header ? (
        <div className={prefix("code-block__header")} onClick={handleCollapse}>
          {header}
        </div>
      ) : null}
      {!collapsed ? (
        <>
          <pre
            ref={contentRef}
            className={cls([className, prefix("code-block__content")])}
            {...props}
          >
            {children}
          </pre>
          {ok ? (
            <IconCheckSmall theme="outline" size="16" />
          ) : (
            <IconCopy
              theme="outline"
              size="16"
              onClick={() => copy(contentRef.current?.innerText || "")}
            />
          )}
        </>
      ) : null}
    </div>
  );
};

export type { CodeBlockProps };
export default CodeBlock;
