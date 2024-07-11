import React from "react";
import { constructDescription } from "../../../helpers/formatters";
import { ExperienceType } from "../../../helpers/types";
import { WrapperHeading } from "./WrapperHeading";

interface Props {
  item: ExperienceType;
}
export const ExperienceItemZenith: React.FC<Props> = ({ item }) => {

  const description = constructDescription(item.startDate, item.endDate, item.isCurrentWork, item.companyName, item.location)
  return (
    <div className="flex flex-col gap-1 pb-4">
      <WrapperHeading>{description.description}</WrapperHeading>
      <p className="text-l">{description.dates}</p>
      <p className="text-sm whitespace-pre-line">{item.description}</p>
    </div>
  );
};
