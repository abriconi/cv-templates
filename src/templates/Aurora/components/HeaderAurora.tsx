import React from "react";
import { CvType } from "../../../helpers/types";
import { HeadingAurora } from "../../../shared-components/Heading";


interface HeaderProps {
  img: string | undefined;
  userData: CvType;
}
export const HeaderAurora: React.FC<HeaderProps> = ({ img, userData }: HeaderProps) => {
  return (
    <div className="flex flex-row w-full">
      <div className="w-1/3">
        { img && <img src={img} alt="Uploaded user" className="object-cover aspect-square" />}
      </div>

      <div className="flex flex-col justify-between w-2/3 p-10" style={{ backgroundColor: "var(--primary-color)" }}>
        <div className="flex flex-col gap-2">
          <HeadingAurora tag="h1" title={`${userData.firstName} ${userData.lastName}`} />
          <HeadingAurora tag="h2" title={`${userData.jobPosition}`} />
        </div>
        <div className="flex flex-col gap-1">
          <p>
            {userData.city}, {userData.country}
          </p>
          <p>
            {userData.phone} &#183; <span className="underline">{userData.email}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
