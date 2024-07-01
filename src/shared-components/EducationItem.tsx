import { dateFormatter } from "../helpers/formatters";
import { EducationType } from "../helpers/types";

interface Props {
  item: EducationType;
}

export const EducationItem: React.FC<Props> = ({ item }) => {
  const startDate = dateFormatter(item.startDate);
  const endDate = dateFormatter(item.endDate);

  return (
    <div className="flex flex-col pt-2">
      <p className="font-semibold text-sm">
        {item.degree ? `${item.degree}, ${item.school}` : `${item.school}`}
        {item.location && <span>{`, ${item.location}`}</span>}
      </p>
      <p className="text-gray-400 text-sm">{`${startDate} - ${endDate}`}</p>
      <p className="text-sm whitespace-pre-line">{item.description}</p>
    </div>
  );
};
