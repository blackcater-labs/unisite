import React, {
  useCallback,
  useMemo,
  useState,
  cloneElement,
  useRef,
} from "react";
import { CSSTransition } from "react-transition-group";
import { useClickAway } from "react-use";

type DropdownProps = {
  trigger: React.ReactElement;
};
type DropdownFC = React.FC<DropdownProps>;

const Dropdown: DropdownFC = ({ trigger, children }) => {
  const [show, setShow] = useState(false);
  const toggleShow = useCallback(() => setShow((show) => !show), []);
  const triggerNode = useMemo(
    () => cloneElement(trigger, { onClick: toggleShow }),
    [trigger, toggleShow]
  );

  const ref = useRef(null);
  useClickAway(ref, () => {
    setShow(false);
  });

  return (
    <div className="relative" ref={ref}>
      {triggerNode}
      <CSSTransition
        in={show}
        timeout={150}
        classNames={{
          enter: "transform scale-95 opacity-0",
          enterActive:
            "transition duration-150 ease-out transform scale-100 opacity-100",
          exit: "",
          exitActive:
            "transition duration-150 ease-out transform scale-95 opacity-0",
        }}
        unmountOnExit
      >
        <div className="absolute right-0 z-20">{children}</div>
      </CSSTransition>
    </div>
  );
};

export type { DropdownProps };
export default Dropdown;
