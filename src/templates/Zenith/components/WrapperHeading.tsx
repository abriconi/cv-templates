import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export const WrapperHeading: React.FC<Props> = ({ children }: Props) => {
  return (
    <h4 style={{ boxShadow: "inset 0 0 100px 100px var(--primary-color)" }} className="font-semibold text-l text-white">
      {children}
    </h4>
  );
};
