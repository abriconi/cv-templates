import React from "react";
import { constructDescription } from "../../../helpers/formatters";
import { EducationType } from "../../../helpers/types";
import { WrapperHeading } from "./WrapperHeading";

interface Props {
  item: EducationType;
}

export const EducationItemZenith: React.FC<Props> = ({ item }) => {
  const description = constructDescription(item.startDate, item.endDate, item.isCurrentStudy, item.school, item.location);
  return (
    <div className="flex flex-col gap-1 pb-4">
      <WrapperHeading>{description.description}</WrapperHeading>
      <p className="text-l">{description.dates}</p>
      {item.description && <p className="text-sm whitespace-pre-line">{item.description}</p>}
    </div>
  );
};
