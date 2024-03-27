import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { HeadingVertex } from "./HeadingVertex";
import { faUser } from "@fortawesome/free-solid-svg-icons";

interface Props {
  profile: string;
}
export const ProfileVertex: React.FC<Props> = ({ profile }: Props) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <HeadingVertex tag="h2" title="Profile">
        <FontAwesomeIcon icon={faUser} className="text-blue-600" style={{ color: "var(--primary-color)" }} />
      </HeadingVertex>
      <p className="text-sm">{profile}</p>
    </div>
  )
}