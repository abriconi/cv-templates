import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export const RangeLumina: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-1 relative rounded" style={{ boxShadow: "inset 0 0 10px var(--primary-shade)" }}>
      {children}
    </div>
  );
};
