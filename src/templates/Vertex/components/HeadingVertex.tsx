import React, { ReactNode } from "react";

interface Props {
  tag: "h1" | "h2";
  title: string | undefined;
  children?: ReactNode;
}

export const HeadingVertex: React.FC<Props> = ({ tag, title, children }) => {
  if (tag === "h1") {
    return title && <h1 className="text-2xl">{title}</h1>;
  }

  if (tag === "h2" && children) {
    return (
      <div className="flex flex-row gap-2 items-center">
        {children}
        <h2 className="uppercase">{title}</h2>
      </div>
    );
  }

  return <h2 className="text-l">{title}</h2>;
};
