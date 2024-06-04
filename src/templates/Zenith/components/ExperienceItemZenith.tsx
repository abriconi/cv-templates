import React from "react";
import { dateFormatter } from "../../../helpers/formatters";
import { ExperienceType } from "../../../helpers/types";
import { WrapperHeading } from "./WrapperHeading";

interface Props {
  item: ExperienceType;
}
export const ExperienceItemZenith: React.FC<Props> = ({ item }: Props) => {
  const startDate = dateFormatter(item.startDate);
  const endDate = dateFormatter(item.endDate);
  return (
    <div className="flex flex-col gap-1 pb-4">
      <WrapperHeading>
        {item.title} at {item.companyName}
        {item.location && <span>{`, ${item.location}`}</span>}
      </WrapperHeading>

      <p className="text-l">{`${startDate} - ${endDate}`}</p>
      <p className="text-sm whitespace-pre-line">{item.description}</p>
    </div>
  );
};
