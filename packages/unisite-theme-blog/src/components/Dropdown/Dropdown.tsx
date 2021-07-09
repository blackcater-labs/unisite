import React, { useCallback, useState, useRef } from "react";
import { useClickAway } from "react-use";

import Transition from "../Transition";

interface DropdownProps {
  overlay?: React.ReactElement;
}
type DropdownFC = React.FC<DropdownProps>;

const Dropdown: DropdownFC = ({ overlay, children }) => {
  const [show, setShow] = useState(false);
  const toggleShow = useCallback(() => setShow((show) => !show), []);

  const ref = useRef(null);
  useClickAway(ref, () => {
    setShow(false);
  });

  return (
    <div className="relative" ref={ref}>
      <div className="inline-block" onClick={toggleShow}>
        {children}
      </div>
      <Transition
        show={show}
        enter="transition duration-150 ease-out transform"
        enterFrom="scale-95 opacity-0"
        enterTo="scale-100 opacity-100"
        leave="transition duration-150 ease-out transform"
        leaveFrom="scale-100 opacity-100"
        leaveTo="scale-95 opacity-0"
      >
        <div className="absolute left-0 z-20">{overlay}</div>
      </Transition>
    </div>
  );
};

export type { DropdownProps };
export default Dropdown;
