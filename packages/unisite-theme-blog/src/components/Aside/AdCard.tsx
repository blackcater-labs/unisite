import React from "react";

import Card from "../Card";

interface AdCardProps {}

type AdCardFC = React.FC<AdCardProps>;

const AdCard: AdCardFC = () => {
  return (
    <Card className="sticky top-0">
      <div className="-mx-8 -my-6 rounded-2xl overflow-hidden">
        <a href="">
          <img
            className="w-full h-full object-cover"
            src="https://pic.leetcode-cn.com/1617775622-PWkWON-%E4%BE%A7%E8%BE%B9%E6%A0%8F%E5%B9%BF%E5%91%8A%208.png"
            alt="leetcode"
          />
        </a>
      </div>
    </Card>
  );
};

export type { AdCardProps };
export default AdCard;
