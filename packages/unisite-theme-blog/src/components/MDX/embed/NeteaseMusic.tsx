import React from "react";

import { FC2 } from "../../../types";

type NeteaseMusicProps = {
  id: string;
  autoPlay?: boolean;
  size?: "small" | "default";
};
type NeteaseMusicFC = FC2<NeteaseMusicProps>;

const NeteaseMusic: NeteaseMusicFC = ({
  id,
  autoPlay = false,
  size = "default",
}) => {
  return (
    <div>
      <iframe
        // @ts-ignore
        frameborder="no"
        border="0"
        marginwidth="0"
        marginheight="0"
        width="330"
        height={size === "small" ? "52" : "86"}
        src={`//music.163.com/outchain/player?type=2&id=${id}&auto=${
          autoPlay ? 1 : 0
        }&height=${size === "small" ? 32 : 66}`}
      />
    </div>
  );
};

export type { NeteaseMusicProps };
export default NeteaseMusic;
