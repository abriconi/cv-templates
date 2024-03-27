
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { ExperienceType } from "../../../helpers/types";
import { ExperienceItem } from "../../../shared-components/ExperienceItem";
import { HeadingVertex } from "./HeadingVertex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ExperienceProps {
  experience: ExperienceType[];
}

export const ExperienceVertex: React.FC<ExperienceProps> = ({ experience }: ExperienceProps) => (
  <div className="flex flex-col gap-2 items-start">
    <HeadingVertex title="Experience" tag="h2">
      <FontAwesomeIcon icon={faBriefcase} className="text-blue-600" style={{ color: "var(--primary-color)" }} />
    </HeadingVertex>

    <div className="flex flex-col gap-2">
      {experience.map((item, index) => (
        <ExperienceItem key={index} item={item} />
      ))}
    </div>
  </div>
);
