import React, { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
  text: string;
  onClick?: () => void;
};

const Tooltip = ({ children, text, onClick }: Props) => {
  const [showText, setShowText] = useState(false);

  return (
    <div
      className="relative"
      onClick={onClick}
      onMouseOver={() => setShowText(true)}
      onMouseOut={() => setShowText(false)}
    >
      {children}
      <div
        className={`absolute bg-white right-0 p-1 rounded-md border border-slate-200 whitespace-nowrap ${
          !showText && "hidden"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
