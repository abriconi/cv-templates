import React from "react";
import { HeadingLumina } from "./HeadingLumina";

interface Props {
  profile: string;
}
export const ProfileLumina: React.FC<Props> = ({ profile }: Props) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <HeadingLumina tag="h2" title="Profile" />
      <p className="text-sm">{profile}</p>
    </div>
  );
};
