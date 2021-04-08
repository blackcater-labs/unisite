import React, {
  useCallback,
  useMemo,
  useState,
  cloneElement,
  useRef,
} from "react";
import { useClickAway } from "react-use";

import Transition from "../Transition";

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
      <Transition
        show={show}
        enter="transition duration-150 ease-out transform"
        enterFrom="scale-95 opacity-0"
        enterTo="scale-100 opacity-100"
        leave="transition duration-150 ease-out transform"
        leaveFrom="scale-100 opacity-100"
        leaveTo="scale-95 opacity-0"
      >
        <div className="absolute left-0 z-20">{children}</div>
      </Transition>
    </div>
  );
};

export type { DropdownProps };
export default Dropdown;
