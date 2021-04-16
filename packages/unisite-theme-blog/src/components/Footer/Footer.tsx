import React from "react";

type FooterProps = {};
type FooterFC = React.FC<FooterProps>;

const Footer: FooterFC = () => {
  return (
    <footer className="max-w-6xl mx-auto py-8">
      <div>
        <p className="text-center text-gray-800 dark:text-white">
          © blackcater 2021 - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export type { FooterProps };
export default Footer;
