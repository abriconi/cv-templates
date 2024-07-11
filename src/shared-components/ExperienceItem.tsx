import { constructDescription } from "../helpers/formatters";
import { ExperienceType } from "../helpers/types";


interface Props {
  item: ExperienceType;
}

export const ExperienceItem: React.FC<Props> = ({ item }) => {
  const description = constructDescription(item.startDate, item.endDate, item.isCurrentWork, item.companyName, item.location, item.title)
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
