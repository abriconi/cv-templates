import { constructDescription } from "../helpers/formatters";
import { EducationType } from "../helpers/types";

interface Props {
  item: EducationType;
}

export const EducationItem: React.FC<Props> = ({ item }) => {
  const description = constructDescription(item.startDate, item.endDate, item.isCurrentStudy, item.school, item.location)

  return (
    <div className="flex flex-col pt-2">
      <p className="font-semibold text-sm">
        {description.description}
      </p>
      <p className="text-gray-400 text-sm">{description.dates}</p>
      <p className="text-sm whitespace-pre-line">{item.description}</p>
    </div>
  );
};
