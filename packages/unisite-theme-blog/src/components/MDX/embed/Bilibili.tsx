import React from "react";
import { FC2 } from "../../../types";

interface BilibiliProps {
  bvId: string;
  // 跳转到视频某时刻，单位秒
  t?: number;
  // 打开第几个视频
  page?: number;
  // 是否宽屏展示
  wide?: boolean;
  // 是否显示弹幕
  danmaku?: boolean;
}
type BilibiliFC = FC2<BilibiliProps>;

const Bilibili: BilibiliFC = ({
  bvId,
  page = 1,
  wide = true,
  danmaku = false,
  t = 0,
}) => {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        width="100%"
        height="100%"
        src={`//player.bilibili.com/player.html?bvid=${bvId}&page=${page}&as_wide=${
          wide ? 1 : 0
        }&high_quality=1&danmaku=${danmaku ? 1 : 0}&t=${t}`}
        scrolling="no"
        // @ts-ignore
        border="0"
        frameBorder="no"
        framespacing="0"
        // @ts-ignore
        allowFullScreen="true"
      />
    </div>
  );
};

export type { BilibiliProps };
export default Bilibili;
