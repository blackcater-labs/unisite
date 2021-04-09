import React from "react";

import Card from "../Card";

type AdCardProps = {};

type AdCardFC = React.FC<AdCardProps>;

const AdCard: AdCardFC = () => {
  return (
    <Card className="sticky top-0">
      <div className="-mx-8 -my-6 rounded-2xl overflow-hidden">
        <a href="">
          <img
            className="w-full h-full object-cover"
            src="https://pic.leetcode-cn.com/1617775622-PWkWON-侧边栏广告 8.png"
            alt="leetcode"
          />
        </a>
      </div>
    </Card>
  );
};

export type { AdCardProps };
export default AdCard;
