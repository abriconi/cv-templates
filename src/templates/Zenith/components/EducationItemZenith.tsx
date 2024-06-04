import React from "react";
import { dateFormatter } from "../../../helpers/formatters";
import { EducationType } from "../../../helpers/types";
import { WrapperHeading } from "./WrapperHeading";

interface Props {
  item: EducationType;
}

export const EducationItemZenith: React.FC<Props> = ({ item }: Props) => {
  const startDate = dateFormatter(item.startDate);
  const endDate = dateFormatter(item.endDate);
  return (
    <div className="flex flex-col gap-1 pb-4">
      <WrapperHeading>
        {item.degree && <span>{`${item.degree} at `}</span>}
        {item.school}, {item.location}
      </WrapperHeading>
      <p className="text-l">{`${startDate} - ${endDate}`}</p>
      {item.description && <p className="text-sm whitespace-pre-line">{item.description}</p>}
    </div>
  );
};
